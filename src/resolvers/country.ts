async function countries(_: any, __: any, { dataSources }: any) {
  const { lmao } = dataSources
  return lmao.getCountries()
}

function country(_: any, {name}: any, { dataSources }: any) {
  const { lmao } = dataSources
  return lmao.getCountry(name)
}

module.exports = {
  Query: {
    countries,
    country,
  },
}
