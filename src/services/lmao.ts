import { Country, VaccineCoverage } from '../types'
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

  async getVaccineCoverage(name: string): Promise<VaccineCoverage> {
    const response = await this.get(`/v3/covid-19/vaccine/coverage/countries/${name}`);
    const timelineArray = Object.entries(response.timeline).map(([date, coverage]) => ({
      date,
      coverage: coverage as number
    }));

    return {
      country: response.country,
      timeline: timelineArray
    };
  }
}