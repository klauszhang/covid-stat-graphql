import { ServerContext } from '../context/serverContext'
import { Continent } from '../types'

const continentResolver = {
  Query: {
    async continents(
      _: void,
      __: void,
      { dataSources }: ServerContext
    ): Promise<Continent[]> {
      return dataSources.lmao.getContinents()
    },
    async continent(
      _: void,
      { name }: { name: string },
      { dataSources }: ServerContext
    ): Promise<Continent> {
      return dataSources.lmao.getContinent(name)
    },
  },
}

export default continentResolver
