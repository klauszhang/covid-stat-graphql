import { UserInputError } from 'apollo-server'
import { Book, Author } from '../types'

const countryResolver = {
  Query: {
    book: function book(
      _: void,
      params: { id: number },
      { dataSources }: any
    ): Promise<Book> {
      if (!params?.id) {
        throw new UserInputError('Invalid book id')
      }
      return dataSources.crud.getBook(params.id)
    },
    books: function book(
      _: void,
      __: void,
      { dataSources }: any
    ): Promise<Book> {
      return dataSources.crud.getBooks()
    },
    author: function author(
      _: void,
      params: { id: number },
      { dataSources }: any
    ): Promise<Author> {
      if (!params?.id) {
        throw new UserInputError('Invalid author id')
      }
      return dataSources.crud.getAuthor(params.id)
    },
  },
  Mutation: {
    addBook: async (
      _: void,
      { title, author_id }: { title: string; author_id: number },
      { dataSources }: any
    ) => {
      const results = await dataSources.crud.addBook(title, author_id)
      return results
    },
    removeBook: async (
      _: void,
      { id }: { id: number },
      { dataSources }: any
    ) => {
      const results = await dataSources.crud.removeBook(id)
      return results
    },
    updateBook: async (
      _: void,
      {
        id,
        title,
        author_id,
      }: { id: number; title: string; author_id: number },
      { dataSources }: any
    ) => {
      const results = await dataSources.crud.updateBook(id, title, author_id)
      return results
    },
  },
  Author: {
    books: (author: Author, _: void, { dataSources }: any) => {
      return dataSources.crud.getAuthorBooks(author.id)
    },
  },
  Book: {
    author: (book: Book, _: void, { dataSources }: any) => {
      return dataSources.crud.getAuthor(book.author_id)
    },
  },
}

export default countryResolver
