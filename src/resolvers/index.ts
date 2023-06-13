import countryResolver from './country'
import vaccineCoverageResolver from './vaccine'
import * as _ from 'lodash'

let resolvers = _.merge({}, countryResolver)
resolvers = _.merge(resolvers, vaccineCoverageResolver)

export default resolvers
