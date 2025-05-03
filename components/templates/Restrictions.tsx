import * as React from 'react'
import ListWithCircle from '../ListWithCircleProps'

const Restrictions: React.FC = () => {
  const restrictions = [
    { label: 'PRIMARY KEY', description: 'Identifica unicamente cada registro em uma tabela.' },
    {
      label: 'FOREIGN KEY',
      description:
        'Garante que os dados em uma tabela sejam consistentes com os dados de outra tabela.',
    },
    { label: 'NOT NULL', description: 'Garante que uma coluna não aceite valores nulos.' },
    { label: 'UNIQUE', description: 'Garante que os valores em uma coluna sejam únicos.' },
    {
      label: 'CHECK',
      description: 'Garante que os valores em uma coluna atendam a uma condição específica.',
    },
    {
      label: 'DEFAULT',
      description: 'Define um valor padrão para uma coluna quando nenhum valor é fornecido.',
    },
  ]

  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">RESTRIÇÕES (CONSTRAINTS)</h2>

      <span>
        As restrições em SQL são regras aplicadas a tabelas ou colunas para garantir a integridade e
        a validade dos dados. Elas definem limites ou condições que os dados devem obedecer durante
        a inserção, atualização ou exclusão. Restrições ajudam a evitar inconsistências e garantem a
        conformidade com as regras do banco de dados.
      </span>

      <ListWithCircle title="Tipos de Restrições Comuns" items={restrictions} />

      <div className="flex flex-col gap-4 w-full bg-primary-50 p-2 rounded-lg">
        <span>Exemplo de uso:</span>
        <span className="text-center font-mono bg-primary-500 p-2 rounded">
          CREATE TABLE students ( student_id INT PRIMARY KEY, name VARCHAR(50) NOT NULL, age INT
          CHECK (age &gt;= 18), email VARCHAR(100) UNIQUE );
        </span>
        Este exemplo de código cria uma tabela chamada{' '}
        <span className="bg-primary-500 px-2 py-1 rounded">students</span> no banco de dados e
        demonstra o uso de restrições (constraints) para garantir a integridade dos dados
        armazenados. Vamos detalhar cada elemento:
        <div className="mb-6">
          <span className="block bg-primary-500 px-2 py-1 rounded mb-2 font-mono text-center">
            student_id INT PRIMARY KEY
          </span>
          <p className="ml-4">
            <strong>PRIMARY KEY:</strong> Define que a coluna{' '}
            <span className="bg-primary-500 px-2 py-1 rounded">student_id</span> é uma chave
            primária, ou seja, ela deve ter valores únicos e não nulos. É usada para identificar de
            forma única cada linha da tabela.
          </p>
        </div>
        <div className="mb-6">
          <span className="block bg-primary-500 px-2 py-1 rounded mb-2 font-mono text-center">
            name VARCHAR(50) NOT NULL
          </span>
          <p className="ml-4">
            <strong>NOT NULL:</strong> Indica que a coluna{' '}
            <span className="bg-primary-500 px-2 py-1 rounded">name</span> não pode conter valores
            nulos. Cada aluno deve ter um nome obrigatoriamente.
          </p>
        </div>
        <div className="mb-6">
          <span className="block bg-primary-500 px-2 py-1 rounded mb-2 font-mono text-center">
            age INT CHECK (age &gt;= 18)
          </span>
          <p className="ml-4">
            <strong>CHECK:</strong> Define uma restrição de verificação na coluna{' '}
            <span className="bg-primary-500 px-2 py-1 rounded">age</span>. Essa restrição especifica
            que o valor da idade (<span className="bg-primary-500 px-2 py-1 rounded">age</span>)
            deve ser maior ou igual a 18.
          </p>
          <p className="ml-4">
            Por exemplo, se alguém tentar inserir um valor menor que 18, o banco de dados rejeitará
            a inserção, garantindo que apenas alunos maiores de idade sejam registrados.
          </p>
        </div>
        <div className="mb-6">
          <span className="block bg-primary-500 px-2 py-1 rounded mb-2 font-mono text-center">
            email VARCHAR(100) UNIQUE
          </span>
          <p className="ml-4">
            <strong>UNIQUE:</strong> Garante que cada valor na coluna{' '}
            <span className="bg-primary-500 px-2 py-1 rounded">email</span> seja único. Dois alunos
            diferentes não podem ter o mesmo endereço de e-mail registrado na tabela.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Restrictions
