const { ApolloServer } = require('apollo-server')
import LmaoAPI from './services/lmao'
import resolvers from './resolvers'
import schemas from './schemas'

const port = 3001

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
