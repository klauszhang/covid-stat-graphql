import { ApolloServer } from 'apollo-server'
import depthLimit from 'graphql-depth-limit'
import { ApolloServerPluginCacheControl } from 'apollo-server-core'

import { typeDefs, resolvers, services } from './combineModules'

const port = 3001

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      lmao: new services.LmaoAPI(),
      crud: new services.CrudApi(),
    }
  },
  validationRules: [depthLimit(10)],
  plugins: [ApolloServerPluginCacheControl({ defaultMaxAge: 5 })],
})

server.listen(port, () => {
  console.log(`server is up and running at http://localhost:${port}`)
})
