import * as React from 'react'
import TableComponentTemplates from '../TableComponentTemplates'
import QueryResult from '../QueryResult'

const Where: React.FC = () => {
  const data = [
    { id: 1, label: 'id', value: ['1', '2', '3'] },
    { id: 2, label: 'name', value: ['Anna', 'Maria', 'Keny'] },
    { id: 3, label: 'age', value: ['20', '18', '22'] },
    { id: 4, label: 'grade', value: ['B', 'A', 'B'] },
  ]

  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">WHERE</h2>

      <span>
        O comando <span className="font-mono bg-primary-500 px-2 py-1 rounded">WHERE</span> é
        utilizado para filtrar os resultados de uma consulta, exibindo apenas os registros que
        atendem a uma condição específica.
      </span>

      <span>
        Este comando é fundamental para trabalhar com grandes volumes de dados, permitindo combinar
        condições usando operadores como
        <span className="font-mono bg-primary-500 px-2 py-1 rounded">AND</span>,
        <span className="font-mono bg-primary-500 px-2 py-1 rounded">OR</span> e{' '}
        <span className="font-mono bg-primary-500 px-2 py-1 rounded">NOT</span>.{' '}
      </span>

      <div className="flex flex-col w-full gap-1">
        <h3 className="font-medium text-sm">Tabela Students</h3>
        <TableComponentTemplates data={data} />
      </div>

      <div className="flex flex-col gap-4">
        <span>Exemplos de consultas</span>

        <QueryResult
          query="SELECT name FROM Estudantes WHERE age &gt;= 22;"
          data={[{ id: 2, label: 'name', value: ['Keny'] }]}
          description="Esta consulta retorna os nomes dos estudantes com idade maior ou igual a 22."
        />

        <QueryResult
          query="SELECT name FROM Estudantes WHERE grade = 'A';"
          data={[{ id: 2, label: 'name', value: ['Maria'] }]}
          description="Esta consulta retorna os nomes dos estudantes da grade igual a A"
        />

        <QueryResult
          query=" SELECT name FROM Estudantes WHERE age = 20 AND grade = 'B';"
          data={[{ id: 2, label: 'name', value: ['Anna'] }]}
          description="Esta consulta retorna os nomes dos estudantes com idade igual a 20 e grade B."
        />
      </div>
    </div>
  )
}

export default Where
