# Projeto SQL OCTOPUS

Este projeto é composto por uma aplicação front-end desenvolvida em Vue.js e uma API construída com NestJS, utilizando uma base de dados MySQL. Ele está configurado para ser executado tanto localmente quanto em um servidor na nuvem.

## Requisitos

- [Node.js](https://nodejs.org) (para o front-end)
- [Docker](https://www.docker.com) e [Docker Compose](https://docs.docker.com/compose/) (para o back-end e banco de dados, caso rode localmente)
- Opcional: [npx](https://www.npmjs.com/package/npx) para executar as migrations do Prisma

---

## 🛠 Configuração do Ambiente de Desenvolvimento

### Back-end (API e Banco de Dados)

Atualmente, a API e o banco de dados estão hospedados em um servidor na nuvem. No entanto, caso o serviço na nuvem não esteja mais disponível, siga estas etapas para executar o back-end localmente:

1. **Acessar o diretório da API:**

   ```bash
   cd /api

   ```

2. **Configurar a URL do banco de dados:**
   No arquivo de variáveis de ambiente .env (se não existir, crie), altere a variável DATABASE_URL para utilizar o banco de dados local. Descomente a linha correspondente ao banco local e comente a linha do banco na nuvem:

# Para rodar localmente, use:

DATABASE_URL="mysql://root:123@mysql_db:3306/octopus"

# Para o servidor na nuvem, use:

# DATABASE_URL="mysql://admin:amanda_power_user@54.94.221.214:3306/octopus"

3. **Executar o Docker Compose:**

docker-compose up --build -d

Aplicar as migrations no banco de dados:

npx prisma migrate dev

4. **Acessar a API**:
   Após a execução bem-sucedida, a API estará disponível em:

http://localhost:3000

5. **Configurar o banco de dados**
   Certifique-se de que o arquivo database.zip, localizado na raiz do projeto, foi importado corretamente no MySQL para garantir que os dados necessários sejam carregados.

### Front-end (Vue.js)

O front-end é independente da execução local do back-end. Caso o servidor na nuvem esteja ativo, basta seguir estas etapas:

1. **Acessar o diretório do front-end:**

cd /client

Instalar as dependências:

npm install

Executar o servidor de desenvolvimento:

npm run dev

### Ajustar o endpoint da API:

Se o back-end estiver rodando localmente, atualize o endpoint da API no front-end para apontar para:
http://localhost:3000

Acessar o front-end:
Por padrão, estará disponível em:
http://localhost:3001

🌐 Implantação
Atualmente, a API e o banco de dados estão hospedados em um servidor na nuvem. Caso o serviço esteja offline, siga as instruções acima para configurar um ambiente local.

📂 Estrutura do Projeto
/api: Contém o código da API desenvolvida em NestJS.

    /front: Contém o código do front-end em Vue.js.

    database.zip: Arquivo compactado contendo os scripts SQL para popular a base de dados local.

🚀 Funcionalidades

    Front-end: Interface intuitiva para interação com a aplicação.

    Back-end: API RESTful para gerenciar operações de dados.

    Banco de dados: MySQL para armazenamento e gerenciamento de dados.
