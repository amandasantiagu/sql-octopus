import React from 'react'

export interface TableColumn {
  id: number
  label: string
  value: any[]
}

interface TableProps {
  data: TableColumn[]
}

const TableComponentTemplates: React.FC<TableProps> = ({ data }) => {
  if (!data || data.length === 0) return null

  const rowCount = data[0].value.length

  return (
    <div className="flex flex-col w-full gap-4">
      <table className="table-auto w-full border-separate border-spacing-0 rounded-lg">
        <thead>
          <tr>
            {data.map((column) => (
              <th
                key={column.id}
                className="bg-white text-black p-2 font-normal first:rounded-tl-lg last:rounded-tr-lg"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(rowCount)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {data.map((column, columnIndex) => (
                <td
                  key={column.id}
                  className={`p-2 border border-gray-300 text-center text-xxs text-white ${
                    rowIndex === rowCount - 1 && columnIndex === 0 ? 'rounded-bl-lg' : ''
                  } ${
                    rowIndex === rowCount - 1 && columnIndex === data.length - 1
                      ? 'rounded-br-lg'
                      : ''
                  }`}
                >
                  {column.value[rowIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponentTemplates
