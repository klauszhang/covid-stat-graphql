import { Book } from '../types/book'
import { RESTDataSource } from 'apollo-datasource-rest'
import { Author } from '../types'

export class Crud extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000/'
  }

  async getBooks(): Promise<Book> {
    const response = await this.get(`/books`)
    return response
  }

  async getBook(id: string): Promise<Book> {
    const response = await this.get(`/book/${id}`)
    return response
  }

  async getAuthor(id: string): Promise<Author> {
    const response = await this.get(`/author/${id}`)
    return response
  }

  async getAuthorBooks(id: string): Promise<[Book]> {
    const response = await this.get(`/authorBooks/${id}`)
    return response
  }

  async addBook(title: string, author_id: number): Promise<Book> {
    const response = await this.post(`/book`, { title, author_id })
    return response
  }

  async removeBook(id: string): Promise<Book> {
    const response = await this.delete(`/book/${id}`)
    return response
  }

  async updateBook(
    id: string,
    title: string,
    author_id: number
  ): Promise<Book> {
    const response = await this.put(`/book/${id}`, { title, author_id })
    return response
  }
}

export default Crud
