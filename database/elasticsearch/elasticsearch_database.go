package elasticsearch

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"strconv"
	"strings"

	"github.com/elastic/go-elasticsearch/v7/esapi"
	"github.com/elastic/go-elasticsearch/v7/esutil"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/state"

	"quorumengineering/quorum-report/types"
)

type ElasticsearchDB struct {
	apiClient APIClient
}

func New(client APIClient) (*ElasticsearchDB, error) {
	db := &ElasticsearchDB{
		apiClient: client,
	}

	initialized, err := db.checkIsInitialized()
	if err != nil {
		return nil, err
	}
	if !initialized {
		if err := db.init(); err != nil {
			return nil, err
		}
	}
	return db, nil
}

func (es *ElasticsearchDB) init() error {
	mapping := `{"mappings":{"properties": {"internalCalls": {"type": "nested" }}}}`
	createRequest := esapi.IndicesCreateRequest{
		Index: TransactionIndex,
		Body:  strings.NewReader(mapping),
	}

	//TODO: check error scenarios
	es.apiClient.DoRequest(createRequest)

	es.apiClient.DoRequest(esapi.IndicesCreateRequest{Index: ContractIndex})
	es.apiClient.DoRequest(esapi.IndicesCreateRequest{Index: StorageIndex})
	es.apiClient.DoRequest(esapi.IndicesCreateRequest{Index: EventIndex})
	es.apiClient.DoRequest(esapi.IndicesCreateRequest{Index: MetaIndex})

	req := esapi.IndexRequest{
		Index:      MetaIndex,
		DocumentID: "lastPersisted",
		Body:       strings.NewReader(`{"lastPersisted": 0}`),
		Refresh:    "true",
		OpType:     "create",
	}
	es.apiClient.IndexRequest(req)

	return nil
}

//AddressDB
func (es *ElasticsearchDB) AddAddresses(addresses []common.Address) error {
	//TODO: use bulk indexing
	for _, address := range addresses {
		contract := Contract{
			Address:             address,
			ABI:                 "",
			CreationTransaction: common.Hash{},
			LastFiltered:        0,
		}

		req := esapi.IndexRequest{
			Index:      ContractIndex,
			DocumentID: address.String(),
			Body:       esutil.NewJSONReader(contract),
			Refresh:    "true",
			OpType:     "create", //This will only create if the contract does not exist
		}

		//TODO: bubble up this error
		es.apiClient.IndexRequest(req)
	}

	return nil
}

func (es *ElasticsearchDB) DeleteAddress(address common.Address) error {
	deleteRequest := esapi.DeleteRequest{
		Index:      ContractIndex,
		DocumentID: address.String(),
		Refresh:    "true",
	}

	_, err := es.apiClient.DoRequest(deleteRequest)
	if err != nil {
		return errors.New("error deleting address: " + err.Error())
	}

	//TODO: delete data from other indices (event + storage)
	return nil
}

func (es *ElasticsearchDB) GetAddresses() ([]common.Address, error) {
	results, err := es.apiClient.ScrollAllResults(ContractIndex, QueryAllAddressesTemplate)
	if err != nil {
		return nil, errors.New("error fetching addresses: " + err.Error())
	}
	converted := make([]common.Address, len(results))
	for i, result := range results {
		data := result.(map[string]interface{})["_source"].(map[string]interface{})
		addr := data["address"].(string)
		converted[i] = common.HexToAddress(addr)
	}

	return converted, nil
}

//ABIDB
func (es *ElasticsearchDB) AddContractABI(address common.Address, abi string) error {
	return es.updateContract(address, "abi", abi)
}

func (es *ElasticsearchDB) GetContractABI(address common.Address) (string, error) {
	contract, err := es.getContractByAddress(address)
	if err != nil {
		return "", err
	}
	return contract.ABI, nil
}

// BlockDB
func (es *ElasticsearchDB) WriteBlock(block *types.Block) error {
	req := esapi.IndexRequest{
		Index:      BlockIndex,
		DocumentID: strconv.FormatUint(block.Number, 10),
		Body:       esutil.NewJSONReader(block),
		Refresh:    "true",
	}

	_, err := es.apiClient.DoRequest(req)
	if err != nil {
		return err
	}

	// Update last persisted block number.
	last, err := es.GetLastPersistedBlockNumber()
	if err != nil {
		return err
	}

	blockNumber := block.Number
	if blockNumber == last+1 {
		for {
			if block, _ := es.ReadBlock(blockNumber + 1); block != nil {
				blockNumber++
			} else {
				break
			}
		}
		req := esapi.IndexRequest{
			Index:      MetaIndex,
			DocumentID: "lastPersisted",
			Body:       strings.NewReader(fmt.Sprintf(`{"lastPersisted": %d}`, blockNumber)),
			Refresh:    "true",
		}
		_, err := es.apiClient.DoRequest(req)
		return err //may be nil
	}
	return nil
}

func (es *ElasticsearchDB) ReadBlock(number uint64) (*types.Block, error) {
	fetchReq := esapi.GetRequest{
		Index:      BlockIndex,
		DocumentID: strconv.FormatUint(number, 10),
	}

	body, err := es.apiClient.DoRequest(fetchReq)
	if err != nil {
		return nil, err
	}

	var blockResult BlockQueryResult
	err = json.Unmarshal(body, &blockResult)
	if err != nil {
		return nil, err
	}
	return &blockResult.Source, nil
}

func (es *ElasticsearchDB) GetLastPersistedBlockNumber() (uint64, error) {
	fetchReq := esapi.GetRequest{
		Index:      MetaIndex,
		DocumentID: "lastPersisted",
	}

	body, err := es.apiClient.DoRequest(fetchReq)
	if err != nil {
		return 0, err
	}

	var lastPersisted LastPersistedResult
	json.Unmarshal(body, &lastPersisted)
	return lastPersisted.Source.LastPersisted, nil
}

// TransactionDB
func (es *ElasticsearchDB) WriteTransaction(transaction *types.Transaction) error {
	if transaction.InternalCalls == nil {
		transaction.InternalCalls = make([]*types.InternalCall, 0)
	}

	req := esapi.IndexRequest{
		Index:      TransactionIndex,
		DocumentID: transaction.Hash.String(),
		Body:       esutil.NewJSONReader(transaction),
		Refresh:    "true",
	}

	_, err := es.apiClient.DoRequest(req)
	return err //may be nil
}

func (es *ElasticsearchDB) ReadTransaction(hash common.Hash) (*types.Transaction, error) {
	fetchReq := esapi.GetRequest{
		Index:      TransactionIndex,
		DocumentID: hash.String(),
	}

	body, err := es.apiClient.DoRequest(fetchReq)
	if err != nil {
		return nil, err
	}

	var transactionResult TransactionQueryResult
	err = json.Unmarshal(body, &transactionResult)
	if err != nil {
		return nil, err
	}
	return &transactionResult.Source, nil
}

// IndexDB
func (es *ElasticsearchDB) IndexBlock(addresses []common.Address, block *types.Block) error {
	// filter out registered and unfiltered address only
	filteredAddresses := map[common.Address]bool{}
	for _, address := range addresses {
		lastFiltered, _ := es.GetLastFiltered(address)
		if es.addressIsRegistered(address) && lastFiltered < block.Number {
			filteredAddresses[address] = true
			log.Printf("Index registered address %v at block %v.\n", address.Hex(), block.Number)
		}
	}

	// index transactions and events
	for _, txHash := range block.Transactions {
		transaction, _ := es.ReadTransaction(txHash)
		es.indexTransaction(filteredAddresses, transaction)
	}

	for addr := range filteredAddresses {
		es.updateLastFiltered(addr, block.Number)
	}
	return nil
}

func (es *ElasticsearchDB) IndexStorage(blockNumber uint64, rawStorage map[common.Address]*state.DumpAccount) error {
	for address, dumpAccount := range rawStorage {
		stateObj := State{
			Address:     address,
			BlockNumber: blockNumber,
			StorageRoot: common.HexToHash(dumpAccount.Root),
		}
		storageMap := Storage{
			StorageRoot: common.HexToHash(dumpAccount.Root),
			StorageMap:  dumpAccount.Storage,
		}

		reqState := esapi.IndexRequest{
			Index:      StateIndex,
			DocumentID: address.String() + "-" + strconv.FormatUint(blockNumber, 10),
			Body:       esutil.NewJSONReader(stateObj),
			Refresh:    "true",
		}
		reqStorage := esapi.IndexRequest{
			Index:      StorageIndex,
			DocumentID: "0x" + dumpAccount.Root,
			Body:       esutil.NewJSONReader(storageMap),
			Refresh:    "true",
		}

		//TODO: check response
		es.apiClient.DoRequest(reqState)
		es.apiClient.DoRequest(reqStorage)
	}
	return nil
}

func (es *ElasticsearchDB) GetContractCreationTransaction(address common.Address) (common.Hash, error) {
	contract, err := es.getContractByAddress(address)
	if err != nil {
		return common.Hash{}, err
	}
	return contract.CreationTransaction, nil
}

func (es *ElasticsearchDB) GetAllTransactionsToAddress(address common.Address) ([]common.Hash, error) {
	queryString := fmt.Sprintf(QueryByToAddressTemplate, address.String())
	results, err := es.apiClient.ScrollAllResults(TransactionIndex, queryString)
	if err != nil {
		return nil, err
	}

	converted := make([]common.Hash, len(results))
	for i, result := range results {
		data := result.(map[string]interface{})["_source"].(map[string]interface{})
		addr := data["hash"].(string)
		converted[i] = common.HexToHash(addr)
	}

	return converted, nil
}

func (es *ElasticsearchDB) GetAllTransactionsInternalToAddress(address common.Address) ([]common.Hash, error) {
	queryString := fmt.Sprintf(QueryInternalTransactions, address.String())
	results, _ := es.apiClient.ScrollAllResults(TransactionIndex, queryString)

	converted := make([]common.Hash, len(results))
	for i, result := range results {
		data := result.(map[string]interface{})["_source"].(map[string]interface{})
		addr := data["hash"].(string)
		converted[i] = common.HexToHash(addr)
	}

	return converted, nil
}

func (es *ElasticsearchDB) GetAllEventsFromAddress(address common.Address) ([]*types.Event, error) {
	query := fmt.Sprintf(QueryByAddressTemplate, address.String())
	results, err := es.apiClient.ScrollAllResults(EventIndex, query)
	if err != nil {
		return nil, err
	}

	convertedList := make([]*types.Event, len(results))
	for i, result := range results {
		data := result.(map[string]interface{})["_source"].(map[string]interface{})

		marshalled, _ := json.Marshal(data)
		var event Event
		json.Unmarshal(marshalled, &event)

		convertedList[i] = event.To()
	}

	return convertedList, nil
}

func (es *ElasticsearchDB) GetStorage(address common.Address, blockNumber uint64) (map[common.Hash]string, error) {
	fetchReq := esapi.GetRequest{
		Index:      StateIndex,
		DocumentID: address.String() + "-" + strconv.FormatUint(blockNumber, 10),
	}
	body, err := es.apiClient.DoRequest(fetchReq)
	if err != nil {
		return nil, err
	}
	var stateResult StateQueryResult
	json.Unmarshal(body, &stateResult)

	storageFetchReq := esapi.GetRequest{
		Index:      StorageIndex,
		DocumentID: stateResult.Source.StorageRoot.String(),
	}
	body, err = es.apiClient.DoRequest(storageFetchReq)
	if err != nil {
		return nil, err
	}
	var storageResult StorageQueryResult
	json.Unmarshal(body, &storageResult)

	return storageResult.Source.StorageMap, nil
}

func (es *ElasticsearchDB) GetLastFiltered(address common.Address) (uint64, error) {
	contract, err := es.getContractByAddress(address)
	if err != nil {
		return 0, err
	}
	return contract.LastFiltered, nil
}

// Internal functions

func (es *ElasticsearchDB) checkIsInitialized() (bool, error) {
	fetchReq := esapi.CatIndicesRequest{
		Index: []string{MetaIndex, ContractIndex, BlockIndex, StorageIndex, TransactionIndex, EventIndex},
	}

	if _, err := es.apiClient.DoRequest(fetchReq); err != nil {
		if err == ErrIndexNotFound {
			return false, nil
		}
		return false, err
	}
	return true, nil
}

func (es *ElasticsearchDB) getContractByAddress(address common.Address) (*Contract, error) {
	fetchReq := esapi.GetRequest{
		Index:      ContractIndex,
		DocumentID: address.String(),
	}

	body, err := es.apiClient.DoRequest(fetchReq)
	if err != nil {
		return nil, err
	}

	var contract ContractQueryResult
	json.Unmarshal(body, &contract)
	return &contract.Source, nil
}

func (es *ElasticsearchDB) addressIsRegistered(address common.Address) bool {
	allAddresses, _ := es.GetAddresses()
	for _, registeredAddress := range allAddresses {
		if registeredAddress == address {
			return true
		}
	}
	return false
}

func (es *ElasticsearchDB) indexTransaction(filteredAddresses map[common.Address]bool, tx *types.Transaction) {
	// Compare the address with tx.To and tx.CreatedContract to check if the transaction is related.
	if filteredAddresses[tx.CreatedContract] {
		es.updateCreatedTx(tx.CreatedContract, tx.Hash)
		log.Printf("Index contract creation tx %v of registered address %v.\n", tx.Hash.Hex(), tx.CreatedContract.Hex())
	}

	// Index events emitted by the given address
	for _, event := range tx.Events {
		if filteredAddresses[event.Address] {
			es.createEvent(event)
			log.Printf("Append event emitted in transaction %v to registered address %v.\n", event.TransactionHash.Hex(), event.Address.Hex())
		}
	}
}

func (es *ElasticsearchDB) updateCreatedTx(address common.Address, creationTxHash common.Hash) error {
	return es.updateContract(address, "creationTx", creationTxHash.String())
}

func (es *ElasticsearchDB) updateLastFiltered(address common.Address, lastFiltered uint64) error {
	return es.updateContract(address, "lastFiltered", lastFiltered)
}

func (es *ElasticsearchDB) updateContract(address common.Address, property string, value interface{}) error {
	//check contract exists before updating
	_, err := es.getContractByAddress(address)
	if err != nil {
		return err
	}

	query := map[string]interface{}{
		"doc": map[string]interface{}{
			property: value,
		},
	}

	updateRequest := esapi.UpdateRequest{
		Index:      ContractIndex,
		DocumentID: address.String(),
		Body:       esutil.NewJSONReader(query),
		Refresh:    "true",
	}

	_, err = es.apiClient.DoRequest(updateRequest)
	return err
}

func (es *ElasticsearchDB) createEvent(event *types.Event) error {
	var e Event
	e.From(event)
	converted := e

	req := esapi.IndexRequest{
		Index:      EventIndex,
		DocumentID: strconv.FormatUint(event.BlockNumber, 10) + "-" + strconv.FormatUint(event.Index, 10),
		Body:       esutil.NewJSONReader(converted),
		Refresh:    "true",
	}

	//TODO: check response
	es.apiClient.DoRequest(req)
	return nil
}
