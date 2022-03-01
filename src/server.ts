const { ApolloServer } = require('apollo-server')
const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')
import LmaoAPI from './services/lmao'

const port = 3001

const schemas = loadFilesSync(path.join(__dirname, '/schemas'))
const resolvers = loadFilesSync(path.join(__dirname, '/resolvers'))

const server = new ApolloServer({
  typeDefs: mergeTypeDefs(schemas),
  resolvers: mergeResolvers(resolvers),
  dataSources: () => {
    return {
      lmao: new LmaoAPI(),
    }
  },
})

server.listen(port, () => {
  console.log(`server is up and running at http://localhost:${port}`)
})
