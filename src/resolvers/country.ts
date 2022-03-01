import { UserInputError } from 'apollo-server'
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
      if (!name) {
        throw new UserInputError('Invalid country name')
      }
      return dataSources.lmao.getCountry(name)
    },
  },
}

export default countryResolver
