export const typeDef = `
  extend type Query {
    author(id: Int!): Author
    book(id: Int!): Book
    books: [Book]
  }
  extend type Mutation {
    addBook(title: String, author_id: Int): Book
    removeBook(id: Int!): [Book]
    updateBook(id: Int!, title: String, author_id: Int): [Book]
  }
  type Author {
    name: String
    surname: String
    books: [Book]
  }
  type Book {
    id: String
    title: String
    pages: Int
    releaseDate: String
    isbn: String
    author: Author
  }
`
