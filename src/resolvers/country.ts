import { ServerContext } from '../context/serverContext'
import { Country } from '../types'

const countryResolver = {
  Query: {
    async countries(
      _: void,
      __: void,
      { dataSources }: ServerContext
    ): Promise<Country[]> {
      return dataSources.lmao.getCountries()
    },
    async country(
      _: void,
      { name }: { name: string },
      { dataSources }: ServerContext
    ): Promise<Country> {
      return dataSources.lmao.getCountry(name)
    },
  },
}

export default countryResolver
