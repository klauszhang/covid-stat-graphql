const countryResolver = {
  Query: {
    countries: async function countries(_: any, __: any, { dataSources }: any) {
      return dataSources.lmao.getCountries()
    },

    country: function country(_: any, { name }: any, { dataSources }: any) {
      return dataSources.lmao.getCountry(name)
    },
  },
}

export default countryResolver
