import React from 'react'
import QueryResult from '../QueryResult'
import TableComponentTemplates from '../TableComponentTemplates'

const dataCourses = [
  { id: 1, label: 'course_id', value: ['1', '2', '3'] },
  { id: 2, label: 'course_name', value: ['Matemática', 'História', 'Filosofia'] },
]

const dataStudents = [
  { id: 1, label: 'student_id', value: ['101', '102', '103', '104'] },
  { id: 2, label: 'name', value: ['Anna', 'Maria', 'João', 'Keny'] },
  { id: 3, label: 'course_id', value: ['1', '2', '2', '3'] },
]

const Exists: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">EXISTS</h2>

      <span>
        O operador <span className="font-mono bg-primary-500 px-2 py-1 rounded">EXISTS</span> é
        usado para verificar se uma subconsulta retorna algum resultado. Ele retorna verdadeiro se a
        subconsulta produzir pelo menos um registro.
      </span>

      <span> Por exemplo, para listar os cursos que possuem alunos matriculados:</span>

      <div className="flex flex-col w-full gap-4">
        <div className="flex-1">
          <h4 className="font-medium text-sm">Tabela courses</h4>
          <TableComponentTemplates data={dataCourses} />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm">Tabela students</h4>
          <TableComponentTemplates data={dataStudents} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span>Exemplo de consulta</span>

        <QueryResult
          query={`SELECT course_name 
                  FROM courses 
                  WHERE EXISTS (
                    SELECT * 
                    FROM students 
                    WHERE students.course_id = courses.course_id
                  );`}
          data={[{ id: 1, label: 'course_name', value: ['Matemática', 'História', 'Filosofia'] }]}
          description="Esta consulta retorna os nomes dos cursos que possuem pelo menos um aluno matriculado."
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-sm">Quando usar o operador EXISTS?</h3>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            Quando é necessário verificar a existência de registros relacionados em outra tabela.
          </li>
          <li className="mb-4">
            Útil para evitar resultados redundantes e melhorar a legibilidade em consultas que
            dependem de subconsultas.
          </li>
          <li className="mb-4">
            Quando se deseja priorizar eficiência em verificações lógicas em grandes bases de dados.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Exists
