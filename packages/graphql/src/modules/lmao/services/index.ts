import { Country } from '../types'
import { RESTDataSource } from 'apollo-datasource-rest'

export class Lmao extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://corona.lmao.ninja/v2'
  }

  async getCountries(): Promise<Country[]> {
    const response = await this.get('/countries')
    return response
  }

  async getCountry(name: string): Promise<Country> {
    const response = await this.get(`/countries/${name}`)
    return response
  }
}

export default Lmao
