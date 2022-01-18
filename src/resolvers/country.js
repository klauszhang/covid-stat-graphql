async function countries(_, __, { dataSources }) {
  const { lmao } = dataSources
  return lmao.getCountries()
}

function country() {
  throw new Error('not implemented')
}

module.exports = {
  Query: {
    countries,
    country,
  },
}
