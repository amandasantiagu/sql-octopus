import React from 'react'
import QueryResult from '../QueryResult'

const Grant: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center p-4">
      <h2 className="text-md font-bold text-center">GRANT</h2>

      <span>
        O comando <span className="font-mono bg-primary-500 px-2 py-1 rounded">GRANT</span> em SQL é
        usado para conceder permissões a usuários ou roles para executar ações específicas em
        tabelas, visões, ou outros objetos no banco de dados. É uma ferramenta essencial para
        gerenciar a segurança e o acesso aos dados.
      </span>

      <div className="flex flex-col gap-4">
        <span className="font-medium text-sm">Estrutura básica do comando GRANT:</span>
        <span className="text-center font-mono bg-primary-500 p-2 rounded">
          GRANT &lt;permissões&gt; ON &lt;objeto&gt; TO &lt;usuário/role&gt;;
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-medium text-sm">Exemplo 1: Conceder permissão de leitura</span>
        <QueryResult
          query={`GRANT SELECT ON students TO user1;`}
          description="Concede ao usuário 'user1' permissão para realizar consultas (SELECT) na tabela 'students'."
        />
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-medium text-sm">Exemplo 2: Permissões de leitura e escrita</span>
        <QueryResult
          query={`GRANT SELECT, INSERT, UPDATE ON students TO user1;`}
          description="Permite ao usuário 'user1' consultar, inserir e atualizar dados na tabela 'students'."
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-sm">Cuidados ao usar o comando GRANT</h3>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            Conceda apenas as permissões necessárias para evitar acessos indevidos.
          </li>
          <li className="mb-4">
            Utilize roles (funções) para gerenciar permissões de forma eficiente em vez de atribuir
            permissões diretamente aos usuários.
          </li>
          <li className="mb-4">
            Revise e atualize permissões regularmente para garantir a segurança do banco de dados.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Grant
