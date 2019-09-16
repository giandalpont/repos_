# Dev frontend e backend

## Passo a Passo

## Frontend
- [1] **Passo**:  Abra o termina e entre na pasta frontend executa o comando `npm install`.
- [2] **Passo**:  Na mesma pasta executa o comando `npm start` para inicial a aplicação na port: `localhost:3000`.


## Frontend
- [1] **Passo**:  Abra o termina e entre na pasta backend executa o comando `npm install`
- [2] **Passo**:  Abra seu banco de dados e `cria um  banco`.
- [3] **Passo**:  Com o banco criado importa o `slq` com o mone de `db.sql` que esta dentro da pasta backend.
- [4] **Passo**:  Para configurar a conexão com o banco de dados renomeia o aquivo `env_exemplo` para `.env`  e configura as conexões.
- [5] **Passo**:  Com o terminal na pasta backend executa o comendo `npm start` para iniciar a aplicação na port:  `localhost:4000/graphql`.
- **GraphQL**:  Consultas e salvando dados no banco.

```javascript
// Guardando no banco
mutation {
  novoRepositorio(
    dados: {
      id_repositorio: 12
      name: "teste"
      full_name: "teste/repositorio"
      url: "https://github.com/"
      description: "GitHub"
      language: "GraphQL"
      forks: "21"
      issues: "3"
      stargazers: "5"
      subscribers "8"
    }
  ){
    id_repositorio
    name
    full_name
    url
    description
    language
    forks
    issues
    stargazers
  }
}

//Consulta
usuarios {
  id
  id_repositorio
  name
  full_name
  url
  description
  language
  forks
  issues
  stargazers
}
```
  