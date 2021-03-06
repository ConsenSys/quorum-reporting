import React from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import PaginatedTableView from './PaginatedTableView'

export function ReportTable({ searchReport, address }) {
  return (
    <PaginatedTableView
      title={searchReport.label}
      note={'Note: Blocks with changes to contract fields of type \'mapping\' will show up in the list, but the actual change in value will not be shown.'}
      HeaderView={ReportHeader}
      ItemView={ReportRowItem}
      getItems={(page, rowsPerPage, lastItem) => {
        return searchReport.getItems({ address, ...searchReport.params }, {
          pageNumber: page,
          pageSize: rowsPerPage,
          after: lastItem,
        })
      }}
    />
  )
}

export function ReportHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell width="10%"><strong>Block</strong></TableCell>
        <TableCell width="90%"><strong>State</strong></TableCell>
      </TableRow>
    </TableHead>
  )
}

export function ReportRowItem(s) {
  return (
    <TableRow key={s.blockNumber}>
      <TableCell>{s.blockNumber}</TableCell>
      <TableCell>
        <Table size="small" aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell width="20%"><strong>Name</strong></TableCell>
              <TableCell width="30%"><strong>Type</strong></TableCell>
              <TableCell width="50%"><strong>Value</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              s.historicStorage.map((v) => (
                <TableRow
                  key={JSON.stringify(v)}
                  style={{ backgroundColor: v.changed ? '#88aaff' : 'transparent' }}
                >
                  <TableCell>
                    <div>{v.name}</div>
                  </TableCell>
                  <TableCell>
                    <div>{v.type}</div>
                  </TableCell>
                  <TableCell>
                    <div style={{ maxWidth: '500px' }}>
                      {
                        v.type === 'string'
                          ? (
                            <TextareaAutosize
                              readOnly
                              rowsMax={4}
                              rowsMin={2}
                              aria-label="maximum height"
                              style={{
                                fontSize: '15px',
                                width: '500px',
                              }}
                              defaultValue={`"${v.value}"`}
                            />
                          ) : v.value.toString()
                      }
                    </div>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableCell>
    </TableRow>
  )
}
