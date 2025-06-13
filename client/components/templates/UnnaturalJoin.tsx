import React from 'react'
import QueryResult from '../QueryResult'
import TableComponentTemplates from '../TableComponentTemplates'

const dataStudents = [
  { id: 1, label: 'student_id', value: ['1', '2', '3'] },
  { id: 2, label: 'name', value: ['Anna', 'Maria', 'Keny'] },
  { id: 3, label: 'course_id', value: ['101', '102', '103'] },
]

const dataCourses = [
  { id: 1, label: 'course_id', value: ['101', '102', '104'] },
  { id: 2, label: 'course_name', value: ['Matemática', 'História', 'Filosofia'] },
]

const UnnaturalJoin: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">JUNÇÃO NÃO NATURAL</h2>

      <span>
        A junção <span className="font-mono bg-primary-500 px-2 py-1 rounded">não natural</span> é
        usada para combinar registros de duas ou mais tabelas com base em uma condição explícita
        definida pelo programador. Diferente da junção natural, ela requer uma especificação clara
        da lógica de relacionamento entre as tabelas.
      </span>

      <div className="flex flex-col w-full gap-4">
        <div className="flex-1">
          <h4 className="font-medium text-sm">Tabela students</h4>
          <TableComponentTemplates data={dataStudents} />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm">Tabela courses</h4>
          <TableComponentTemplates data={dataCourses} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span>Exemplo de consulta</span>

        <QueryResult
          query="SELECT students.name, courses.course_name FROM students JOIN courses ON students.course_id = courses.course_id;"
          data={[
            { id: 1, label: 'name', value: ['Anna', 'Maria'] },
            { id: 2, label: 'course_name', value: ['Matemática', 'História'] },
          ]}
          description="Esta consulta retorna os nomes dos estudantes e os nomes dos cursos em que estão matriculados."
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-sm">Quando usar a junção não natural?</h3>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            Quando as tabelas não possuem colunas com o mesmo nome para serem relacionadas
            automaticamente.
          </li>
          <li className="mb-4">
            Quando é necessário combinar tabelas com base em condições específicas (e.g., cálculos
            ou colunas transformadas).
          </li>
          <li className="mb-4">
            Quando é necessário um controle mais explícito sobre os critérios de junção.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UnnaturalJoin
