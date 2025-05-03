import React from 'react'
import TableComponent from '../TableComponent'
import QueryResult from '../QueryResult'

const dataStudents = [
  { id: 1, label: 'id', value: ['1', '2', '3'] },
  { id: 2, label: 'name', value: ['Anna', 'Maria', 'Keny'] },
  { id: 3, label: 'age', value: ['20', '18', '22'] },
  { id: 4, label: 'courseId', value: ['101', '102', '101'] },
]

const dataCourses = [
  { id: 1, label: 'courseId', value: ['101', '102'] },
  { id: 2, label: 'courseName', value: ['Matemática', 'História'] },
]

const NaturalJoin: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">NATURAL JOIN</h2>

      <span>
        O comando <span className="font-mono bg-primary-500 px-2 py-1 rounded">NATURAL JOIN</span> é
        usado para combinar tabelas com base em colunas com o mesmo nome e tipo de dado. Por
        exemplo, se você tiver as tabelas <b>Estudantes</b> e <b>Cursos</b> com a coluna{' '}
        <b>CursoID</b> em comum, pode usá-la assim:
      </span>

      <span className="bg-primary-500 text-center p-2 rounded gap-1 flex w-full">
        SELECT name, courseName FROM Estudantes NATURAL JOIN Cursos;
      </span>

      <span>
        Esse comando automaticamente encontra a relação entre as tabelas com base nas colunas
        compartilhadas, simplificando consultas em bancos relacionais.
      </span>

      <div className="flex flex-col w-full gap-4">
        <div className="flex-1">
          <h4 className="font-medium text-sm"> Tabela students</h4>
          <TableComponent table={dataStudents} />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm">Tabela courses</h4>
          <TableComponent table={dataCourses} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span>Exemplos de consultas</span>

        <QueryResult
          query="SELECT name, courseName FROM students NATURAL JOIN course;"
          data={[
            { id: 1, label: 'name', value: ['Anna', 'Keny'] },
            { id: 2, label: 'courseName', value: ['Matemática', 'Matemática'] },
          ]}
          description="Esta consulta retorna os nomes dos estudantes e os nomes dos cursos em que estão matriculados, combinando automaticamente pelo CourseID."
        />
      </div>
    </div>
  )
}

export default NaturalJoin
