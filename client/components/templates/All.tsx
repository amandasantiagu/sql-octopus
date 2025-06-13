import * as React from 'react'
import QueryResult from '../QueryResult'
import TableComponentTemplates from '../TableComponentTemplates'

const All: React.FC = () => {
  const students = [
    { id: 1, label: 'student_id', value: [1, 2, 3, 4] },
    { id: 2, label: 'name', value: ['Ana', 'Carlos', 'João', 'Maria'] },
    { id: 3, label: 'age', value: [20, 25, 22, 30] },
  ]

  const allowedAges = [{ id: 1, label: 'age', value: [18, 20, 22, 24] }]

  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">OPERADOR ALL</h2>

      <span>
        O operador ALL compara um valor com todos os resultados da subconsulta. Ele retorna
        verdadeiro se a condição for verdadeira para todos os valores.
      </span>

      <div className="flex flex-col w-full gap-2 mt-6">
        <h3 className="font-medium text-sm">Tabela students</h3>
        <TableComponentTemplates data={students} />

        <h3 className="font-medium text-sm mt-4">Tabela allowed_ages</h3>
        <TableComponentTemplates data={allowedAges} />
      </div>

      <QueryResult
        query={`SELECT name FROM students WHERE age > ALL (SELECT age FROM allowed_ages);`}
        data={[
          { id: 1, label: 'name', value: ['Carlos', 'Maria'] },
          { id: 2, label: 'age', value: [25, 30] },
        ]}
        description="Esta consulta retorna os nomes dos alunos cuja idade é maior do que todos os valores presentes na tabela allowed_ages."
      />
    </div>
  )
}

export default All
