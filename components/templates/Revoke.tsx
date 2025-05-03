import * as React from 'react'
import TableComponent from '../TableComponent'
import QueryResult from '../QueryResult'
import ListWithCircle from '../ListWithCircleProps'

const Revoke: React.FC = () => {
  const permissionsExample = [
    { label: 'SELECT', description: 'Permite que o usuário leia dados de uma tabela.' },
    { label: 'INSERT', description: 'Permite que o usuário insira novos dados em uma tabela.' },
    {
      label: 'UPDATE',
      description: 'Permite que o usuário modifique dados existentes em uma tabela.',
    },
    { label: 'DELETE', description: 'Permite que o usuário remova dados de uma tabela.' },
  ]

  const users = [
    { id: 1, label: 'user_id', value: [1, 2] },
    { id: 2, label: 'username', value: ['user1', 'user2'] },
  ]

  const tables = [
    { id: 1, label: 'table_name', value: ['students'] },
    { id: 2, label: 'permissions', value: ['INSERT, UPDATE', 'SELECT'] },
  ]

  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">REVOKE</h2>

      <span>
        O comando <b>REVOKE</b> é usado para remover permissões anteriormente concedidas a um
        usuário ou role. Ele é complementar ao comando <b>GRANT</b>, garantindo que o administrador
        possa revogar o acesso conforme necessário.
      </span>

      <ListWithCircle title="Permissões Comuns no SQL:" items={permissionsExample} />

      <div className="flex flex-col w-full gap-4 mt-6">
        <h3 className="font-medium text-sm">Tabela de Usuários</h3>
        <TableComponent table={users} />

        <h3 className="font-medium text-sm mt-4">Tabela de Permissões</h3>
        <TableComponent table={tables} />
      </div>

      <QueryResult
        query={`REVOKE INSERT, UPDATE ON students FROM user1;`}
        data={[
          { id: 1, label: 'Action', value: ['REVOKE'] },
          { id: 2, label: 'Permissions Revoked', value: ['INSERT, UPDATE'] },
          { id: 3, label: 'Target Table', value: ['students'] },
          { id: 4, label: 'User', value: ['user1'] },
        ]}
        description="Este comando revoga as permissões de INSERT e UPDATE na tabela students do usuário user1."
      />
    </div>
  )
}

export default Revoke
