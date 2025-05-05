import * as React from 'react'

import ListWithCircle from '../ListWithCircleProps'
import TableComponent from '../TableComponent'
import QueryResult from '../QueryResult'

const Update: React.FC = () => {
  const students = [
    { id: 1, label: 'student_id', value: [1, 2, 3, 4] },
    { id: 2, label: 'name', value: ['Ana', 'Carlos', 'João', 'Maria'] },
    { id: 3, label: 'score', value: [85, 70, 90, 88] },
  ]

  const exams = [
    { id: 1, label: 'student_id', value: [1, 2, 3, 4] },
    { id: 2, label: 'subject', value: ['Math', 'Math', 'Math', 'Math'] },
    { id: 3, label: 'exam_score', value: [85, 75, 95, 80] },
  ]

  const updateExample = [
    {
      label: 'GROUP BY',
      description:
        'Agrupa os registros com base em uma ou mais colunas e executa funções de agregação (e.g., AVG, SUM, COUNT) em cada grupo.',
    },
    {
      label: 'ORDER BY',
      description:
        'Ordena os registros de acordo com uma ou mais colunas. Usado em subconsultas dentro de um UPDATE para selecionar valores específicos ordenados.',
    },
  ]

  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">SUBCONSULTAS UPDATE</h2>

      <p>
        Subconsultas em comandos{' '}
        <span className="font-mono bg-primary-500 px-2 py-1 rounded">UPDATE</span> permitem que você
        atualize dados em uma tabela com base nos resultados de uma consulta interna (subconsulta).
      </p>

      <span>
        {' '}
        Essa técnica é útil quando as alterações precisam considerar informações de outras tabelas
        ou agregações como média, soma, ou contagem de registros.
      </span>

      <span>
        Quando combinadas com{' '}
        <span className="font-mono bg-primary-500 px-2 py-1 rounded">GROUP BY</span> e{' '}
        <span className="font-mono bg-primary-500 px-2 py-1 rounded">ORDER BY</span>, essas
        subconsultas oferecem mais controle, permitindo que você organize e agrupe os dados para
        identificar valores específicos a serem usados na atualização.
      </span>

      <ListWithCircle title="Técnicas Usadas" items={updateExample} />

      <div className="flex flex-col w-full gap-2">
        <h3 className="font-medium text-sm">Tabela Students</h3>
        <TableComponent table={students} />

        <h3 className="font-medium text-sm mt-4">Tabela Exams</h3>
        <TableComponent table={exams} />
      </div>

      <QueryResult
        query={`UPDATE students SET score = ( 
          SELECT AVG(exam_score) 
          FROM exams 
          WHERE exams.student_id = students.student_id 
          GROUP BY exams.student_id );`}
        data={[
          { id: 1, label: 'student_id', value: [1, 2, 3, 4] },
          { id: 2, label: 'name', value: ['Ana', 'Carlos', 'João', 'Maria'] },
          { id: 3, label: 'score', value: [85, 70, 90, 88] },
        ]}
        description="Esta consulta atualiza a coluna score na tabela students com a média dos exam_scores de cada aluno."
      />
    </div>
  )
}

export default Update
