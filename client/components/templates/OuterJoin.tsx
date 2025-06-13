import * as React from 'react'
import QueryResult from '../QueryResult'
import ListWithCircle from '../ListWithCircleProps'
import TableComponentTemplates from '../TableComponentTemplates'

const OuterJoin: React.FC = () => {
  const students = [
    { id: 1, label: 'student_id', value: [1, 2, 3, 4] },
    { id: 2, label: 'name', value: ['Ana', 'Carlos', 'João', 'Maria'] },
    { id: 3, label: 'course_id', value: [101, 102, null, 104] },
  ]

  const courses = [
    { id: 1, label: 'course_id', value: [101, 102, 103, 104] },
    { id: 2, label: 'course_name', value: ['Math', 'Science', 'History', 'Literature'] },
  ]

  const joinTypes = [
    {
      label: 'LEFT OUTER JOIN',
      description:
        'Retorna todos os registros da tabela à esquerda e os registros correspondentes da tabela à direita. Quando não há correspondência, os valores da tabela à direita aparecem como NULL.',
    },
    {
      label: 'RIGHT OUTER JOIN',
      description:
        'Retorna todos os registros da tabela à direita e os correspondentes da tabela à esquerda.',
    },
    {
      label: 'FULL OUTER JOIN',
      description:
        'Retorna todos os registros de ambas as tabelas, com NULL onde não há correspondência.',
    },
  ]

  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">JUNÇÃO EXTERNA</h2>

      <span>
        A Junção Externa (OUTER JOIN) é usada para combinar tabelas, mas diferente da junção
        natural, ela retorna todos os registros de uma tabela mesmo quando não há correspondência na
        outra.
      </span>

      <ListWithCircle title="Existem três tipos principais:" items={joinTypes} />

      <div className="flex flex-col w-full gap-4 mt-6">
        <h3 className="font-medium text-sm">Tabela students</h3>
        <TableComponentTemplates data={students} />

        <h3 className="font-medium text-sm mt-4">Tabela courses</h3>
        <TableComponentTemplates data={courses} />
      </div>

      <QueryResult
        query={`
          SELECT students.name, courses.course_name
          FROM students
          LEFT JOIN courses
          ON students.course_id = courses.course_id;
        `}
        data={[
          { id: 1, label: 'name', value: ['Ana', 'Carlos', 'João', 'Maria'] },
          { id: 2, label: 'course_name', value: ['Math', 'Science', null, 'Literature'] },
        ]}
        description="Esta consulta demonstra um LEFT OUTER JOIN, retornando todos os estudantes e os nomes dos cursos nos quais estão matriculados. Os estudantes sem curso associado aparecem com valores NULL na coluna course_name."
      />

      <QueryResult
        query={`
          SELECT students.name, courses.course_name
          FROM students
          RIGHT JOIN courses
          ON students.course_id = courses.course_id;
        `}
        data={[
          { id: 1, label: 'name', value: ['Ana', 'Carlos', null, 'Maria'] },
          { id: 2, label: 'course_name', value: ['Math', 'Science', 'History', 'Literature'] },
        ]}
        description="Esta consulta demonstra um RIGHT OUTER JOIN, retornando todos os cursos e os nomes dos estudantes associados. Cursos sem estudantes associados aparecem com valores NULL na coluna name."
      />

      <QueryResult
        query={`
          SELECT students.name, courses.course_name
          FROM students
          FULL OUTER JOIN courses
          ON students.course_id = courses.course_id;
        `}
        data={[
          { id: 1, label: 'name', value: ['Ana', 'Carlos', 'João', 'Maria', null] },
          {
            id: 2,
            label: 'course_name',
            value: ['Math', 'Science', null, 'Literature', 'History'],
          },
        ]}
        description="Esta consulta demonstra um FULL OUTER JOIN, retornando todos os registros de ambas as tabelas. Onde não há correspondência, os valores aparecem como NULL."
      />
    </div>
  )
}

export default OuterJoin
