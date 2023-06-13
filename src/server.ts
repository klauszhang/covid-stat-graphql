import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import LmaoAPI from './services/lmao'
import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'
import { ServerContext } from './context/serverContext'

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001

const schemas = loadFilesSync(path.join(__dirname, '/schemas'))
const resolvers = loadFilesSync(path.join(__dirname, '/resolvers'))

try {
  const server = new ApolloServer<ServerContext>({
    typeDefs: schemas,
    resolvers,
  })
  const standAloneServer = startStandaloneServer(server, {
    context: async () => {
      return {
        dataSources: {
          lmao: new LmaoAPI(),
        },
      }
    },
    listen: { port },
  })

  standAloneServer.then(() => {
    console.log(`🚀  Server ready at http://localhost:${port}`)
  })
} catch (error) {
  console.log(error)
}
