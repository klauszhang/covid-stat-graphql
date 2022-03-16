import { Book } from './book'

export type Author = {
  id: Number
  name: String
  surname: String
  books: [Book]
}
