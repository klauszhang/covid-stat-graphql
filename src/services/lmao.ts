import { Country, Continent } from '../types'
import { RESTDataSource } from '@apollo/datasource-rest'
export default class Lmao extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://corona.lmao.ninja'
  }

  async getCountries(): Promise<Country[]> {
    const response = await this.get('/v3/covid-19/countries')
    return response
  }

  async getCountry(name: string): Promise<Country> {
    const response = await this.get(`/v3/covid-19/countries/${name}`)
    return response
  }

  async getContinents(): Promise<Continent[]> {
    const response = await this.get('/v3/covid-19/continents')
    return response
  }

  async getContinent(continent: string): Promise<Continent> {
    const response = await this.get(`/v3/covid-19/continents/${continent}`)
    return response
  }
}
