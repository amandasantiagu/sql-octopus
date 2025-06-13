import React from 'react'
import QueryResult from '../QueryResult'
import TableComponentTemplates from '../TableComponentTemplates'

const dataStudents = [
  { id: 1, label: 'student_id', value: ['1', '2', '3'] },
  { id: 2, label: 'name', value: ['Anna', 'Maria', 'Keny'] },
  { id: 3, label: 'age', value: ['20', '22', '25'] },
]

const dataAllowedAges = [{ id: 1, label: 'age', value: ['18', '21', '25'] }]

const Some: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">SOME</h2>

      <span>
        O operador <span className="font-mono bg-primary-500 px-2 py-1 rounded">SOME</span> é usado
        para comparar um valor com os resultados de uma subconsulta. Ele verifica se algum valor da
        subconsulta satisfaz a condição especificada. Por exemplo, para encontrar estudantes com
        idades maiores que pelo menos uma das idades permitidas:
      </span>

      <div className="flex flex-col w-full gap-4">
        <div className="flex-1">
          <h4 className="font-medium text-sm">Tabela students</h4>
          <TableComponentTemplates data={dataStudents} />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm">Tabela allowed_ages</h4>
          <TableComponentTemplates data={dataAllowedAges} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span>Exemplo de consulta</span>

        <QueryResult
          query="SELECT name FROM students WHERE age > SOME (SELECT age FROM allowed_ages);"
          data={[{ id: 1, label: 'name', value: ['Anna', 'Maria'] }]}
          description="Esta consulta retorna os nomes dos estudantes cuja idade é maior que pelo menos uma das idades permitidas na tabela allowed_ages."
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-sm">Quando usar o operador SOME?</h3>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            Quando você precisa verificar se um valor atende à condição em relação a qualquer valor
            retornado por uma subconsulta.
          </li>
          <li className="mb-4">
            É útil em cenários onde há necessidade de comparação com um conjunto de resultados sem
            especificar valores individuais.
          </li>
          <li className="mb-4">O operador SOME é funcionalmente equivalente a ANY em SQL.</li>
        </ul>
      </div>
    </div>
  )
}

export default Some
