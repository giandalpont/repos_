require('dotenv').config()
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { importSchema } = require('graphql-import')

const resolvers = require('./resolvers')
const context = require('./config/context')

const schemaPath = './schema/index.graphql'
const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers,
    context
})

// server.listen().then(({ url }) => {
//     console.log(`Executando em ${url}`)
// })

const app = express(); 
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)