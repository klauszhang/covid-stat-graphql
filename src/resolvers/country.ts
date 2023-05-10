import { Country } from '../types'

const countryResolver = {
  Query: {
    countries: async function countries(
      _: void,
      __: void,
      { dataSources }: any
    ): Promise<Country[]> {
      return dataSources.lmao.getCountries()
    },

    country: function country(
      _: void,
      { name }: { name: string },
      { dataSources }: any
    ): Promise<Country> {
      return dataSources.lmao.getCountry(name)
    },
  },
}

export default countryResolver
