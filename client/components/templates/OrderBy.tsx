import React from 'react'
import QueryResult from '../QueryResult'
import TableComponentTemplates from '../TableComponentTemplates'

const data = [
  { id: 1, label: 'id', value: ['1', '2', '3'] },
  { id: 2, label: 'name', value: ['Anna', 'Maria', 'Keny'] },
  { id: 3, label: 'age', value: ['20', '17', '22'] },
  { id: 4, label: 'grade', value: ['B', 'A', 'B'] },
]

const OrderBy: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">ORDER BY</h2>

      <span>
        O comando <span className="font-mono bg-primary-500 px-2 py-1 rounded">ORDER BY</span>{' '}
        organiza os resultados de uma consulta de forma crescente (
        <span className="font-mono bg-primary-500 px-2 py-1 rounded">ASC</span>) ou decrescente (
        <span className="font-mono bg-primary-500 px-2 py-1 rounded">DESC</span>).
      </span>

      <span>
        Este comando é útil para ordenar os dados de forma que facilite a interpretação e análise.
        Você pode, por exemplo, organizar os alunos por nome ou idade.
      </span>

      <div className="flex flex-col w-full gap-1">
        <h3 className="font-medium text-sm">Tabela Students</h3>
        <TableComponentTemplates data={data} />
      </div>

      <div className="flex flex-col gap-4">
        <span>Exemplos de consultas</span>

        <QueryResult
          query="SELECT name FROM Estudantes ORDER BY name ASC;"
          data={[{ id: 2, label: 'name', value: ['Anna', 'Keny', 'Maria'] }]}
          description="Esta consulta retorna os nomes dos estudantes em ordem alfabética crescente."
        />

        <QueryResult
          query="SELECT name FROM Estudantes ORDER BY age DESC;"
          data={[{ id: 2, label: 'name', value: ['Keny', 'Anna', 'Maria'] }]}
          description="Esta consulta retorna os nomes dos estudantes do mais velho para o mais jovem."
        />

        <QueryResult
          query="SELECT name FROM Estudantes ORDER BY grade DESC, name ASC;"
          data={[{ id: 2, label: 'name', value: ['Anna', 'Keny', 'Maria'] }]}
          description="Esta consulta retorna os nomes dos estudantes ordenados por grade em ordem decrescente e, dentro das grades iguais, em ordem alfabética."
        />
      </div>
    </div>
  )
}

export default OrderBy
