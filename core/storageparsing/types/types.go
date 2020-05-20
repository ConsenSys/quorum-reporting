package types

import (
	"encoding/json"
	"github.com/ethereum/go-ethereum/common"
	"math/big"
	"strconv"
)

var (
	BigOne       = new(big.Int).SetUint64(1)
	BigTwo       = new(big.Int).SetUint64(2)
	BigThirtyTwo = new(big.Int).SetUint64(32)
)

type SolidityStorageEntries []SolidityStorageEntry

type SolidityStorageDocument struct {
	Storage SolidityStorageEntries       `json:"storage"`
	Types   map[string]SolidityTypeEntry `json:"types"`
}

type SolidityStorageEntry struct {
	Label  string `json:"label"`
	Offset uint64 `json:"offset"`
	Slot   uint64 `json:"slot"`
	Type   string `json:"type"`
}

func (sse *SolidityStorageEntry) UnmarshalJSON(b []byte) error {
	var simple struct {
		Label  string `json:"label"`
		Offset uint64 `json:"offset"`
		Slot   string `json:"slot"`
		Type   string `json:"type"`
	}
	err := json.Unmarshal(b, &simple)
	if err != nil {
		return err
	}
	sse.Label = simple.Label
	sse.Type = simple.Type
	sse.Offset = simple.Offset

	if simple.Slot != "" {
		slotAsUint64, err := strconv.ParseUint(simple.Slot, 10, 0)
		if err != nil {
			return err
		}
		sse.Slot = slotAsUint64
	}

	return nil
}

type SolidityTypeEntry struct {
	Encoding      string                 `json:"encoding"`
	Key           string                 `json:"key"`
	Label         string                 `json:"label"`
	NumberOfBytes uint64                 `json:"numberOfBytes"`
	Value         string                 `json:"value"`
	Base          string                 `json:"base"`
	Members       SolidityStorageEntries `json:"members"`
}

func (sse SolidityStorageEntries) Len() int {
	return len(sse)
}

func (sse SolidityStorageEntries) Less(i, j int) bool {
	if sse[i].Slot < sse[j].Slot {
		return true
	}
	if sse[i].Slot == sse[j].Slot {
		return sse[i].Offset < sse[j].Offset
	}
	return false
}

func (sse SolidityStorageEntries) Swap(i, j int) {
	sse[i], sse[j] = sse[j], sse[i]
}

func (sse *SolidityTypeEntry) UnmarshalJSON(b []byte) error {
	var simple struct {
		Encoding      string                 `json:"encoding"`
		Key           string                 `json:"key"`
		Label         string                 `json:"label"`
		NumberOfBytes string                 `json:"numberOfBytes"`
		Value         string                 `json:"value"`
		Base          string                 `json:"base"`
		Members       SolidityStorageEntries `json:"members"`
	}
	err := json.Unmarshal(b, &simple)
	if err != nil {
		return err
	}
	sse.Encoding = simple.Encoding
	sse.Key = simple.Key
	sse.Label = simple.Label
	sse.Value = simple.Value
	sse.Members = simple.Members
	sse.Base = simple.Base

	if simple.NumberOfBytes != "" {
		numBytesAsUint64, err := strconv.ParseUint(simple.NumberOfBytes, 10, 0)
		if err != nil {
			return err
		}
		sse.NumberOfBytes = numBytesAsUint64
	}

	return nil
}

type StorageItem struct {
	VarName  string      `json:"name"`
	VarIndex uint64      `json:"index"`
	VarType  string      `json:"type"`
	Value    interface{} `json:"value,omitempty"`
	// for map only
	Values map[string]interface{} `json:"values,omitempty"`
}

type ReportingRequestTemplate []*StorageItemTemplate

type ReportingResponseTemplate struct {
	Address       common.Address `json:"address"`
	HistoricState []*ParsedState `json:"historicState"`
}

type StorageItemTemplate struct {
	VarName  string `json:"name"`
	VarIndex uint64 `json:"index"`
	VarType  string `json:"type"`
	// for map only
	KeyType string   `json:"keyType,omitempty"`
	Keys    []string `json:"keys,omitempty"`
}

type ParsedState struct {
	BlockNumber     uint64         `json:"blockNumber"`
	HistoricStorage []*StorageItem `json:"historicStorage"`
}
