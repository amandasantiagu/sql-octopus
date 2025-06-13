import * as React from 'react'
import TableComponentTemplates from '../TableComponentTemplates'
import ListWithCircle from '../ListWithCircleProps'
import QueryResult from '../QueryResult'

const Select: React.FC = () => {
  const data = [
    { id: 1, label: 'id', value: ['1', '2', '3'] },
    { id: 2, label: 'name', value: ['Anna', 'Maria', 'Keny'] },
    { id: 3, label: 'age', value: ['20', '17', '22'] },
    { id: 4, label: 'grade', value: ['B', 'A', 'B'] },
  ]

  const functions = [
    { label: 'COUNT', description: 'Contador de ocorrências de um atributo.' },
    { label: 'MAX / MIN', description: 'Valores máximo/mínimo de um atributo.' },
    { label: 'SUM', description: 'Somador de valores de um atributo.' },
    { label: 'AVG', description: 'Média de valores de um atributo.' },
  ]

  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">SELECT</h2>
      <p>
        O comando <span className="font-mono bg-primary-500 px-2 py-1 rounded">SELECT</span> é a
        base de qualquer consulta em SQL. Ele permite que você escolha quais colunas de uma tabela
        deseja visualizar. Por exemplo, se você quiser ver os nomes dos alunos em uma tabela chamada
        Estudantes, pode usar o comando:
      </p>

      <div className="flex flex-col w-full gap-1">
        <h3 className="font-medium text-sm">Tabela Students</h3>
        <TableComponentTemplates data={data} />
      </div>

      <QueryResult
        query="SELECT name FROM students;"
        data={data.filter((item) => item.label === 'name')}
        description="Esta consulta retorna todos os nomes da tabela"
      />

      <p>
        O <span className="font-mono bg-primary-500 px-2 py-1 rounded">SELECT</span> também pode ser
        usado para mostrar todas as colunas de uma tabela usando o asterisco (
        <span className="font-mono">*</span>), assim:
      </p>
      <span className="bg-primary-500 text-center p-2 rounded">SELECT * FROM students;</span>

      <ListWithCircle title="Funções de Agregação no SELECT :" items={functions} />

      <p>Este comando é essencial para explorar os dados armazenados no banco de dados.</p>
    </div>
  )
}

export default Select
