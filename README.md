# DSA-Aula5-0109
Aula 5 de Desenvolvimento de Serviços e APIs - CARROS - 01/09

+ **Getters, Setter & Virtuals:** https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/
+ **Agrupamento e ordem:** https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
+ **Finders:** https://sequelize.org/docs/v6/core-concepts/model-querying-finders/

### Lembrando que:

**Pra iniciar**:
1. `` npm init -y ``
2. `` npm i express sequelize mysql2 ``
3. `` npm i --save-dev nodemon ``
4. `` npx nodemon app ``
5. No VS, criar um "app.js" como o arquivo do repo
6. Alterar o "package.json", adicionando a linha `` "type": "module", `` após a linha de "main": "index.js","

**Banco de Dados**:
1. Criar a pasta "database" com um arquivo chamado "conecta.js" e lá dentro inserir:

```

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('carros', 'aluno', 'senacrs', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    port: 3306 
  });
  
```` 

**No Insomnia**:
1. URL: http://localhost:3000/carros
2. Criar uma pasta pro projeto
3. Criar as HTTP Requests básicas (GET (listagem), POST (criação do registro no banco), PUT (alterações no registro), DEL (exclusão do registro))
