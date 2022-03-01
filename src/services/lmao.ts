import { Country } from '../types'

const axios = require('axios')

const client = new axios.Axios({
  baseURL: 'https://corona.lmao.ninja/v2',
})

async function getCountries(): Promise<Country[]> {
  const response = await client.get('/countries')
  return JSON.parse(response.data)
}

async function getCountry(name: string): Promise<Country> {
  const response = await client.get(`/countries/${name}`)
  return JSON.parse(response.data)
}

module.exports = { getCountries, getCountry }
