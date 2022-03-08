import { ApolloServer } from 'apollo-server'
import LmaoAPI from './services/lmao'
// import resolvers from './resolvers'
// import schemas from './schemas'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import path from 'path'

const port = 3001

const schemas = loadFilesSync(path.join(__dirname, '/schemas'))
const resolvers = loadFilesSync(path.join(__dirname, '/resolvers'))

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  dataSources: () => {
    return {
      lmao: new LmaoAPI(),
    }
  },
})

server.listen(port, () => {
  console.log(`server is up and running at http://localhost:${port}`)
})
