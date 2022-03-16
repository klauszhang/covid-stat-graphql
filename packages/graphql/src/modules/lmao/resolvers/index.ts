import { UserInputError } from 'apollo-server'
import { Country } from '../types/country'

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
      params: { name: string },
      { dataSources }: any
    ): Promise<Country> {
      if (!params?.name) {
        throw new UserInputError('Invalid country name')
      }
      return dataSources.lmao.getCountry(params.name)
    },
  },
}

export default countryResolver
