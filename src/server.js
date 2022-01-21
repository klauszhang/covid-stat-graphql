const { ApolloServer } = require('apollo-server')
const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')
const lmaoAPI = require('./services/lmao')

const port = 3001

const schemas = loadFilesSync(path.join(__dirname, '/schemas'))
const resolvers = loadFilesSync(path.join(__dirname, '/resolvers'))

const server = new ApolloServer({
  typeDefs: mergeTypeDefs(schemas),
  resolvers: mergeResolvers(resolvers),
  introspection: process.env.NODE_ENV !== 'production',
  formatError(err) {
    // Don't give the specific errors to the client.
    if (err.message.startsWith('Database Error: ')) {
      return new Error('Internal server error')
    }
    // Otherwise return the original error. The error can also
    // be manipulated in other ways, as long as it's returned.
    return err
  },
  dataSources: () => {
    return {
      lmao: lmaoAPI,
    }
  },
})

server.listen(port, () => {
  console.log(`server is up and running at http://localhost:${port}`)
})
