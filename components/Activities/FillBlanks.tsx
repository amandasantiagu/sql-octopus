import { Table } from '@/types/Activity'
import * as React from 'react'

interface Props {
  data: any
}

const FillBlanks: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <span className="text-white text-base w-full">{data?.description}</span>

      <div className="flex flex-col w-full gap-1">
        <span className="text-base text-white"> Tabela </span>

        {data?.table && (
          <table className="table-auto w-full border-separate border-spacing-0 rounded-lg">
            <thead>
              <tr>
                {data.table.map((column: Table, columnIndex: number) => (
                  <th
                    key={column.id}
                    className={`bg-white text-black p-2 font-normal  ${
                      columnIndex === 0 ? 'rounded-tl-lg' : ''
                    } ${columnIndex === data.table.length - 1 ? 'rounded-tr-lg' : ''}`}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.table[0].values.map((_: Table, rowIndex: number) => (
                <tr key={rowIndex}>
                  {data.table.map((column: Table, columnIndex: number) => (
                    <td
                      key={column.id}
                      className={`p-2 border border-gray-300 text-center text-xxs text-white ${
                        rowIndex === data.table[0].values.length - 1 && columnIndex === 0
                          ? 'rounded-bl-lg'
                          : ''
                      } ${
                        rowIndex === data.table[0].values.length - 1 &&
                        columnIndex === data.table.length - 1
                          ? 'rounded-br-lg'
                          : ''
                      }`}
                    >
                      {column.values[rowIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default FillBlanks
