import * as React from 'react'
import { TableColumn } from './TableComponent'
import TableComponentTemplates from './TableComponentTemplates'

interface QueryResultProps {
  query: string
  data?: TableColumn[]
  description: string
}

const QueryResult: React.FC<QueryResultProps> = ({ query, description, data }) => {
  return (
    <div className="flex flex-col gap-4 bg-primary-50 rounded-lg p-2">
      <span className="bg-primary-500 text-center p-2 rounded w-full h-full ">{query}</span>

      {data && <TableComponentTemplates data={data} />}

      <span> {description} </span>
    </div>
  )
}

export default QueryResult
