import { User } from './User'

type TypesActivities =
  | 'fill-blanks'
  | 'only-choice'
  | 'drag-drop'
  | 'combining-pairs'
  | 'true-false'

export type Data = {
  id: number
  label: string
  value: any
}

export type ActivityType = {
  id: number
  type: TypesActivities
  answer: string
  description: string
  explanation: string
  template?: string
  data?: Data[]
  blanks?: string[]
}

export const activitys = [
  {
    id: 5,
    type: 'combining-pairs',
    description:
      'Leia atentamente cada descrição apresentada e verifique se esta associada ao comando correspondente.',
    data: [
      {
        id: 1,
        label: 'select',
        value: 'Escolhe as colunas a serem exibidas no resultado da consulta.',
      },
      {
        id: 2,
        label: 'where',
        value: 'Filtra registros com base em condições específicas.',
      },
      {
        id: 3,
        label: 'from',
        value: 'Define a tabela de onde os dados serão recuperados.',
      },
      { id: 4, label: 'distinct', value: 'Remove valores duplicados do resultado.' },
    ],
  },
  {
    id: 1,
    type: 'fill-blanks',
    description: 'Exiba o nome e a idade dos estudantes da tabela students.',
    template: 'SELECT __columns__ FROM __table__;',
    data: [
      {
        id: 1,
        label: 'id',
        value: ['1', '2', '3'],
      },
      {
        id: 2,
        label: 'name',
        value: ['Anna', 'Maria', 'Keny'],
      },
      {
        id: 3,
        label: 'age',
        value: ['20', '17', '22'],
      },
      {
        id: 4,
        label: 'grade',
        value: ['B', 'A', 'B'],
      },
    ],
    blanks: ['__columns__', '__table__'],
    answer: 'SELECT name, age FROM students;',
    explanation:
      'Essa consulta utiliza a cláusula SELECT para exibir as colunas name e age, que correspondem ao nome e à idade dos estudantes, respectivamente. A cláusula FROM especifica a tabela students como a fonte dos dados.',
  },
  {
    id: 3,
    type: 'only-choice',
    description: 'Qual comando é utilizado para agrupar resultados por uma coluna?',
    data: [
      { id: 1, label: 'join', value: 'join' },
      { id: 2, label: 'group by', value: 'groupBy' },
      { id: 3, label: 'order by', value: 'orderBy' },
      { id: 4, label: 'having', value: 'having' },
    ],
    answer: 'groupBy',
    explanation:
      'O comando GROUP BY é utilizado para agrupar os resultados de uma consulta com base nos valores de uma ou mais colunas.',
  },
  {
    id: 4,
    type: 'true-false',
    description: 'A cláusula HAVING pode ser usada sem um GROUP BY',
    answer: 'true',
    explanation:
      'A cláusula HAVING pode ser usada sem um GROUP BY em consultas SQL. Embora geralmente seja usada para filtrar resultados de grupos criados pelo GROUP BY, ela também pode ser aplicada para filtrar resultados de funções de agregação em consultas sem agrupamento.',
  },
]
