# Covid Stat GraphQL API

Hello and welcome, this is a simple app that will help you to keep track of the covid-19 situation in any country.

It uses API from https://corona.lmao.ninja/ and converted it into GraphQL API.

## How to run it?

1. Clone the repository and run `yarn install` to install the dependency

2. Run `yarn dev` to run the dev server

3. Use your faviourite API tool to interact with the API


## Oly Changes

- Added lightweight mock in memory crud for extra apollo query / mutations
- Added `yarn workspaces` 
  - `yarn dev` runs both the `crud` mock server and `graphql` server in parallel. (You will need to upgrade to Yarn v3.2.0 (`yarn set version stable`) (Possibly also need `yarn plugin import workspace-tools`))
  - Alternatively, run `yarn graphql-dev` in one tab and `yarn crud-dev` in another.
- Added a couple of unit tests for services and resolvers `yarn graphql-tests`
- Added resolver / services for mock crud server
  - Can resolve depth e.g:
    book(id: 5) {
      author {
        name
        surname
        books {
          title
        }
      }
      title
      isbn
      releaseDate
      pages
    }`
- Added depthLimit (there are better solutions depending on circumstances: https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/) 
- Added Mutations pointing to CRUD server

### Example Queries:

mutation AddBook($title: String, $authorId: Int) {
  addBook(title: $title, author_id: $authorId) {
    title
    author {
      name
      surname
    }
  }
}

mutation RemoveBook($removeBookId: Int!) {
  removeBook(id: $removeBookId) {
    title
  }
}

mutation UpdateBook($updateBookId: Int!, $updateBookTitle2: String, $updateBookAuthorId2: Int) {
  updateBook(id: $updateBookId, title: $updateBookTitle2, author_id: $updateBookAuthorId2) {
    id
    title
    author {
      name
      surname
    }
  }
}

query Book($bookId: Int!) {
  book(id: $bookId) {
    author {
      name
      surname
      books {
        title
      }
    }
    title
    isbn
    releaseDate
    pages
  }
}

query Books {
  books {
    id
    title
    pages
    releaseDate
    author {
      name
      surname
    }
  }
}

query Countries {
  countries {
    country
  }
}




## License
This project is not licensed for free use. And all right reserved to Les Mills International.



