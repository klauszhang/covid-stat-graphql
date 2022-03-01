async function countries(_, __, { dataSources }) {
  const { lmao } = dataSources
  return lmao.getCountries()
}

function country(_, {name}, { dataSources }) {
  const { lmao } = dataSources
  return lmao.getCountry(name)
}

module.exports = {
  Query: {
    countries,
    country,
  },
}
