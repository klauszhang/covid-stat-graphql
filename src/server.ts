import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import LmaoAPI from './services/lmao'
import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'

const port = 3001

const schemas = loadFilesSync(path.join(__dirname, '/schemas'))
const resolvers = loadFilesSync(path.join(__dirname, '/resolvers'))

interface ServerContext {
  dataSources: {
    lmao: LmaoAPI;
  };
}

const server = new ApolloServer<ServerContext>({ typeDefs:schemas, resolvers });
const standAloneServer = startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: {
        lmao: new LmaoAPI(),
      },
    };
  },
  listen: { port },
});

standAloneServer.then(()=>{
  console.log(`🚀  Server ready at http://localhost:${port}`);
})
