import continentResolver from './continent'
import countryResolver from './country'
import * as _ from 'lodash'

const resolvers = _.merge(continentResolver, countryResolver)

export default resolvers
