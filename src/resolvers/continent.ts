import { Continent } from '../types'

const continentResolver = {
  Query: {
    continent: async function continent(
      _: void,
      { name }: { name: string },
      { dataSources }: any
    ): Promise<Continent> {
      return dataSources.lmao.getContinent(name)
    },
  },
}

export default continentResolver
