import { Country } from './country'

export type ContinentInfo = {
  lat: number
  long: number
}

export type Continent = {
  updated: number
  cases: number
  todayCases: number
  deaths: number
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
  continentInfo: ContinentInfo
  countries: Country[]
}
