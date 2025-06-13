import React from 'react'

export interface TableColumn {
  id: number
  label: string
  value: any[]
}

export interface TableType {
  label: string
  data: TableColumn[]
}

interface TableProps {
  data: TableType[]
}

const TableComponent: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {data?.length > 0 &&
        data?.map((item, index) => (
          <div className="flex flex-col w-full gap-2" key={index}>
            <span className="text-base text-white">{item?.label}</span>

            <table className="table-auto w-full border-separate border-spacing-0 rounded-lg">
              <thead>
                <tr>
                  {item.data.map((column) => (
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
                {item.data[0]?.value.map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {item.data.map((column, columnIndex) => (
                      <td
                        key={column.id}
                        className={`p-2 border border-gray-300 text-center text-xxs text-white ${
                          rowIndex === item.data[0].value.length - 1 && columnIndex === 0
                            ? 'rounded-bl-lg'
                            : ''
                        } ${
                          rowIndex === item.data[0].value.length - 1 &&
                          columnIndex === item.data.length - 1
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
        ))}
    </div>
  )
}

export default TableComponent
