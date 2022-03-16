import { Crud } from '.'

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

describe('Crud', () => {
  describe('getBook', () => {
    it('should call the .get RESTDataSource method with "/book/testBook"', async () => {
      const datasource = new Crud()
      const testBook = 'testBook'

      await datasource.getBook(testBook)

      expect(mockGet).toBeCalledWith(`/book/${testBook}`)
    })
  })

  describe('getAuthor', () => {
    it('should call the .get RESTDataSource method with "/author/testAuthor"', async () => {
      const datasource = new Crud()
      const testAuthor = 'testAuthor'

      await datasource.getAuthor(testAuthor)

      expect(mockGet).toBeCalledWith(`/author/${testAuthor}`)
    })
  })
})
