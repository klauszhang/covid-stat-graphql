/*-------------- Query start -------------- */

async function countries(_, __, { dataSources }) {
  const { lmao } = dataSources
  return lmao.getCountries()
}

async function country(_, args, { dataSources }) {
  const { lmao } = dataSources
  const countries = await lmao.getCountries()
  return countries?.find(
    (item) => item.country.toLowerCase() === args.name.toLowerCase()
  )
}

async function top10MostAffectedCountries(_, __, { dataSources }) {
  const { lmao } = dataSources
  const countries = await lmao.getCountries()
  return countries
    ?.sort((itemA, itemB) => itemB.cases - itemA.cases)
    .slice(0, 10)
}

async function totalCases(_, __, { dataSources }) {
  const { lmao } = dataSources
  const countries = await lmao.getCountries()
  return countries?.reduce((pre, cur) => pre + cur.cases, 0)
}

/*-------------- Query end -------------- */

/*-------------- Mutation start -------------- */

async function deleteCountry(_, args, { dataSources }) {
  const { lmao } = dataSources
  const countries = await lmao.getCountries()
  return countries?.filter(
    (item) => item.country.toLowerCase() !== args.name.toLowerCase()
  )
}

async function updateCountryCases(_, args, { dataSources }) {
  const { lmao } = dataSources
  const countries = await lmao.getCountries()
  const index = countries?.findIndex(
    (item) => item.country.toLowerCase() === args.name.toLowerCase()
  )

  if (index === -1) {
    return new Error(`Cannot find country: ${args.name}`)
  }

  countries[index].cases = args.cases
  return countries
}

/*-------------- Mutation end -------------- */

module.exports = {
  Query: {
    countries,
    country,
    top10MostAffectedCountries,
    totalCases,
  },
  Mutation: {
    deleteCountry,
    updateCountryCases,
  },
}
