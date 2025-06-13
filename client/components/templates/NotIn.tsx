import React from 'react'
import QueryResult from '../QueryResult'
import TableComponentTemplates from '../TableComponentTemplates'

const dataStudents = [
  { id: 1, label: 'id', value: ['1', '2', '3', '4'] },
  { id: 2, label: 'name', value: ['Anna', 'Maria', 'Keny', 'John'] },
  { id: 3, label: 'courseId', value: ['101', '102', '101', null] },
]

const dataCourses = [
  { id: 1, label: 'courseId', value: ['101', '102'] },
  { id: 2, label: 'courseName', value: ['Matemática', 'História'] },
]

const NotIn: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">NOT IN</h2>

      <span>
        O comando <span className="font-mono bg-primary-500 px-2 py-1 rounded">NOT IN</span> retorna
        todos os registros de uma tabela principal que não estão presentes nos resultados de uma
        subconsulta. Por exemplo, para listar os alunos que não estão matriculados em nenhum curso:
      </span>

      <span className="bg-primary-500 text-center p-2 rounded">
        SELECT name FROM Estudantes WHERE courseId NOT IN (SELECT courseId FROM Cursos);
      </span>

      <span>
        Este comando é útil para identificar dados que não possuem correspondência em outra tabela,
        como no exemplo acima.
      </span>

      <div className="flex flex-col w-full gap-4">
        <div className="flex-1">
          <h4 className="font-medium text-sm "> Tabela students</h4>
          <TableComponentTemplates data={dataStudents} />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm ">Tabela courses</h4>
          <TableComponentTemplates data={dataCourses} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span>Exemplos de consultas</span>

        <QueryResult
          query="SELECT name FROM students WHERE courseId NOT IN (SELECT courseId FROM courses);"
          data={[{ id: 1, label: 'name', value: ['John'] }]}
          description="Esta consulta retorna os nomes dos estudantes que não estão matriculados em nenhum curso."
        />
      </div>
    </div>
  )
}

export default NotIn
