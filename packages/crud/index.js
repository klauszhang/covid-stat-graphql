const express = require('express')
const app = express()
const PORT = 3000

const books = require('./mocks/books')
const authors = require('./mocks/authors')

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded())

app.get('/books', (req, res) => {
  res.json(books)
})

app.get('/book/:id', (req, res) => {
  res.json(books.find((book) => book.id === parseInt(req.params.id)))
})

app.get('/author/:id', (req, res) => {
  res.json(authors.find((author) => author.id === parseInt(req.params.id)))
})

app.get('/authorBooks/:id', (req, res) => {
  res.json(books.filter((book) => book.author_id === parseInt(req.params.id)))
})

app.post('/book', function (req, res) {
  if (!req.body.title || !req.body.author_id) {
    res.status(400)
    res.send('None shall pass')
    return
  }

  const newBook = { id: books.length + 1, ...req.body }
  books.push(newBook)
  res.json(newBook)
})

app.delete('/book/:id', function (req, res) {
  if (!req.params.id) {
    res.status(400)
    res.send('None shall pass')
    return
  }

  books = books.filter((book) => book.id !== parseInt(req.params.id))
  res.json(books)
})

app.put('/book/:id', function (req, res) {
  if (!req.params.id || !req.body.title || !req.body.author_id) {
    res.status(400)
    res.send('None shall pass')
    return
  }

  books = books.map((book) => {
    if (book.id !== parseInt(req.params.id)) return book
    return {
      id: book.id,
      ...req.body,
    }
  })
  res.json(books)
})

app.listen(PORT, function (err) {
  if (err) console.log(err)
  console.log('Server listening on PORT', PORT)
})
