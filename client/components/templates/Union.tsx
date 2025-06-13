import React from 'react'
import TableComponentTemplates from '../TableComponentTemplates'
import QueryResult from '../QueryResult'

const students = [
  { id: 1, label: 'name', value: ['Anna', 'Maria', 'Keny'] },
  { id: 2, label: 'status', value: ['Ativo', 'Ativo', 'Ativo'] },
]

const alumni = [
  { id: 1, label: 'name', value: ['Lucas', 'Maria', 'Carlos'] },
  { id: 2, label: 'status', value: ['Ex-Aluno', 'Ex-Aluno', 'Ex-Aluno'] },
]

const Union: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">UNION</h2>

      <span>
        O comando <span className="font-mono bg-primary-500 px-2 py-1 rounded">UNION</span> combina
        os resultados de duas ou mais consultas SQL em uma única lista. Para isso, as consultas
        devem ter o mesmo número de colunas e tipos de dados compatíveis.
      </span>

      <span>
        Por padrão, o <span className="font-mono bg-primary-500 px-2 py-1 rounded">UNION</span>{' '}
        elimina duplicatas. Caso queira incluir todos os registros, use{' '}
        <span className="font-mono bg-primary-500 px-2 py-1 rounded">UNION ALL</span>.
      </span>

      <div className="flex flex-col w-full gap-2">
        <h3 className="font-medium text-sm">Tabela Students</h3>
        <TableComponentTemplates data={students} />

        <h3 className="font-medium text-sm mt-4">Tabela Alumni</h3>
        <TableComponentTemplates data={alumni} />
      </div>

      <div className="flex flex-col gap-4">
        <span>Exemplos de consultas</span>

        <QueryResult
          query="SELECT name FROM Students UNION SELECT name FROM Alumni;"
          data={[{ id: 1, label: 'name', value: ['Anna', 'Maria', 'Keny', 'Lucas', 'Carlos'] }]}
          description="Esta consulta retorna uma lista combinada de nomes únicos dos estudantes e ex-alunos."
        />

        <QueryResult
          query="SELECT name FROM Students UNION ALL SELECT name FROM Alumni;"
          data={[
            { id: 1, label: 'name', value: ['Anna', 'Maria', 'Keny', 'Lucas', 'Maria', 'Carlos'] },
          ]}
          description="Esta consulta retorna todos os nomes dos estudantes e ex-alunos, incluindo os repetidos."
        />
      </div>
    </div>
  )
}

export default Union
