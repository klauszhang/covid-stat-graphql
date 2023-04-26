import { Continent, Country } from '../types'

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
  Continent: {
    countries: async function (
      { countries }: Continent,
      __: void,
      { dataSources }: any
    ): Promise<Country[]> {
      return dataSources.lmao.getCountries(countries)
    },
  },
}

export default continentResolver
