import React from 'react'

interface TableColumn {
  id: number
  label: string
  value: string[]
}

interface TableProps {
  table: TableColumn[]
}

const TableComponent: React.FC<TableProps> = ({ table }) => {
  return (
    <table className="table-auto w-full border-separate border-spacing-0 rounded-lg">
      <thead>
        <tr>
          {table.map((column, columnIndex) => (
            <th
              key={column.id}
              className={`bg-white text-black p-2 font-normal ${
                columnIndex === 0 ? 'rounded-tl-lg' : ''
              } ${columnIndex === table.length - 1 ? 'rounded-tr-lg' : ''}`}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {table[0].value.map((_, rowIndex) => (
          <tr key={rowIndex}>
            {table.map((column, columnIndex) => (
              <td
                key={column.id}
                className={`p-2 border border-gray-300 text-center text-xxs text-white ${
                  rowIndex === table[0].value.length - 1 && columnIndex === 0 ? 'rounded-bl-lg' : ''
                } ${
                  rowIndex === table[0].value.length - 1 && columnIndex === table.length - 1
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
  )
}

export default TableComponent
