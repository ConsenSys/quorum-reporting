package monitor

import (
	"github.com/ethereum/go-ethereum/event"
	"log"
	"quorumengineering/quorum-report/database"
	"quorumengineering/quorum-report/types"
	"time"
)

type BlockAndTransactions struct {
	block *types.Block
	txs   []*types.Transaction
}

type BatchWriter struct {
	maxBlocks       uint64
	maxTransactions uint64

	currentWorkUnits        []*BlockAndTransactions
	currentTransactionCount uint64

	BatchWorkChan chan *BlockAndTransactions
	db            database.Database

	stopFeed event.Feed
}

func NewBatchWriter(batchWorkChan chan *BlockAndTransactions, db database.Database) *BatchWriter {
	bp := &BatchWriter{
		// TODO: parameterize constant?
		maxBlocks:               100,
		maxTransactions:         1000,
		currentWorkUnits:        make([]*BlockAndTransactions, 0, 100),
		currentTransactionCount: 0,
		BatchWorkChan:           batchWorkChan,
		db:                      db,
	}
	return bp
}

func (bw *BatchWriter) Run(stopChan <-chan types.StopEvent) {
	ticker := time.NewTicker(2 * time.Second)
	for {
		select {
		case newWorkUnit := <-bw.BatchWorkChan:
			// Listen to new block channel and process if new block comes.
			bw.currentWorkUnits = append(bw.currentWorkUnits, newWorkUnit)
			bw.currentTransactionCount += uint64(len(newWorkUnit.txs))
			if uint64(len(bw.currentWorkUnits)) >= bw.maxBlocks || bw.currentTransactionCount >= bw.maxTransactions {
				err := bw.BatchWrite()
				if err != nil {
					log.Panicf("batch write failed: %v", err)
				}
			}
			ticker = time.NewTicker(2 * time.Second)
		case <-ticker.C:
			err := bw.BatchWrite()
			if err != nil {
				log.Panicf("batch write failed: %v", err)
			}
		case <-stopChan:
			return
		}
	}
}

func (bw *BatchWriter) BatchWrite() error {
	allTxns := make([]*types.Transaction, 0, 1000)
	allBlocks := make([]*types.Block, 0, 1000)
	for _, workunit := range bw.currentWorkUnits {
		allTxns = append(allTxns, workunit.txs...)
		allBlocks = append(allBlocks, workunit.block)
	}

	err := bw.db.WriteTransactions(allTxns)
	if err != nil {
		return err
	}
	err = bw.db.WriteBlocks(allBlocks)
	if err != nil {
		return err
	}

	// reset
	bw.currentTransactionCount = bw.maxTransactions
	bw.currentWorkUnits = make([]*BlockAndTransactions, 0, bw.maxBlocks)
	return nil
}
