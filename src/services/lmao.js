const axios = require('axios')

const client = new axios.Axios({
  baseURL: 'https://corona.lmao.ninja/v2',
})

async function getCountries() {
  const response = await client.get('/countries')
  return JSON.parse(response.data)
}

module.exports = { getCountries }
