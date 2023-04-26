import { Continent, Country } from '../types'
import { RESTDataSource } from 'apollo-datasource-rest'

export default class Lmao extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://corona.lmao.ninja/v2'
  }

  async getContinent(name: string): Promise<Continent> {
    const response = await this.get(`/continents/${name}`)
    return response
  }

  async getCountries(countryNames?: string[]): Promise<Country[]> {
    const response = await this.get('/countries', {
      query: countryNames,
    })
    return response
  }

  async getCountry(name: string): Promise<Country> {
    const response = await this.get(`/countries/${name}`)
    return response
  }
}
