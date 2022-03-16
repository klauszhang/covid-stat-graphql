import { UserInputError } from 'apollo-server'
import countryResolver from './'

describe('countryResolver', () => {
  describe('countries', () => {
    it('should call datasource lmao getCountries method', async () => {
      const mockDataSources = {
        lmao: {
          getCountries: jest.fn(),
        },
      }

      await countryResolver.Query.countries(undefined, undefined, {
        dataSources: mockDataSources,
      })

      expect(mockDataSources.lmao.getCountries).toBeCalled()
    })
  })

  describe('country', () => {
    it('should call datasource lmao getCountry method', async () => {
      const mockDataSources = {
        lmao: {
          getCountry: jest.fn(),
        },
      }
      const mockTestName = 'mockTestName'

      await countryResolver.Query.country(
        undefined,
        { name: mockTestName },
        { dataSources: mockDataSources }
      )

      expect(mockDataSources.lmao.getCountry).toBeCalledWith(mockTestName)
    })

    it('should throw a UserInputError when no name is given', async () => {
      const mockDataSources = {
        lmao: {
          getCountry: jest.fn(),
        },
      }

      try {
        await countryResolver.Query.country(undefined, undefined as any, {
          dataSources: mockDataSources,
        })
      } catch (e) {
        expect(e).toEqual(new UserInputError('Invalid country name'))
      }
    })
  })
})
