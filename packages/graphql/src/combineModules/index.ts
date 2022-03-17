import { merge } from 'lodash'
import { typeDef as Country } from '../modules/lmao/schemas/country'
import { typeDef as Crud } from '../modules/crud/schemas'

import countryResolver from '../modules/lmao/resolvers'
import crudResolver from '../modules/crud/resolvers'

import LmaoAPI from '../modules/lmao/services'
import CrudApi from '../modules/crud/services'

const Query = `
  type Query
`
const Mutation = `
  type Mutation
`

export const typeDefs = [Query, Mutation, Country, Crud]
export const resolvers = merge({}, countryResolver, crudResolver)
export const services = { LmaoAPI, CrudApi }
