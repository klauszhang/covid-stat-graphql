import countryResolver from './country'
import continentResolver from './continent'
import * as _ from 'lodash'

let resolvers = _.merge({}, countryResolver)
resolvers = _.merge(resolvers, continentResolver)

export default resolvers
