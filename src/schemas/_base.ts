import { gql } from 'apollo-server'
import { DocumentNode } from 'graphql'

const base: DocumentNode = gql`
  type Query
`
export default base
