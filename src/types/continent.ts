import { Country } from './country'

export type Continent = {
  updated: number
  cases: number
  todayCases: number
  todayDeaths: number
  recovered: number
  todayRecovered: number
  active: number
  critical: number
  casesPerOneMillion: number
  deathsPerOneMillion: number
  tests: number
  testsPerOneMillion: number
  population: number
  continent: string
  activePerOneMillion: number
  recoveredPerOneMillion: number
  criticalPerOneMillion: number
  countries: Country[]
}
