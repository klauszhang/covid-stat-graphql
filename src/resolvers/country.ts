import { ServerContext } from '../context/serverContext'
import { Country } from '../types'

const countryResolver = {
  Query: {
    // query {
    //   countries {
    //     country
    //     cases
    //     deaths
    //     recovered
    //     countryInfo {
    //       iso2
    //       iso3
    //       flag
    //     }
    //   }
    // }
    async countries(
      _: void,
      __: void,
      { dataSources }: ServerContext
    ): Promise<Country[]> {
      try {
        return await dataSources.lmao.getCountries()
      } catch (error) {
        console.error('Failed to fetch countries:', error)
        throw new Error('Failed to fetch countries')
      }
    },
    // query {
    //   country(name: "USA") {
    //     country
    //     cases
    //     deaths
    //     recovered
    //     countryInfo {
    //       iso2
    //       iso3
    //       flag
    //     }
    //   }
    // }
    async country(
      _: void,
      { name }: { name: string },
      { dataSources }: ServerContext
    ): Promise<Country> {
      try {
        return await dataSources.lmao.getCountry(name)
      } catch (error) {
        // Log the error
        console.error(`Failed to fetch data for country ${name}:`, error)

        // Throw an ApolloError to send to the client
        throw new Error(`Failed to fetch data for country ${name}`)
      }
    },
  },
}

export default countryResolver
