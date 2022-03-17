import { Lmao } from '.'

const mockGet = jest.fn()
jest.mock('apollo-datasource-rest', () => {
  class MockRESTDataSource {
    baseUrl = ''
    get = mockGet
  }
  return {
    RESTDataSource: MockRESTDataSource,
  }
})

describe('lmao', () => {
  describe('getCountries', () => {
    it('should call the .get RESTDataSource method with "/countries"', async () => {
      const datasource = new Lmao()

      await datasource.getCountries()

      expect(mockGet).toBeCalledWith('/countries')
    })
  })

  describe('getCountry', () => {
    it('should call the .get RESTDataSource method with "/countries/countryName"', async () => {
      const datasource = new Lmao()
      const testCountry = 'testCountry'

      await datasource.getCountry(testCountry)

      expect(mockGet).toBeCalledWith(`/countries/${testCountry}`)
    })
  })
})
