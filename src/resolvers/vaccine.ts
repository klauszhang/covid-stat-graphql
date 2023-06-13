import { ServerContext } from '../context/serverContext'
import { VaccineCoverage } from '../types'

const vaccineCoverageResolver = {
    Query: {
        // query {
        //     vaccineCoverage(name: "USA") {
        //       country
        //       timeline {
        //         date
        //         coverage
        //       }
        //     }
        //   }
        async vaccineCoverage(
            _: void,
            { name }: { name: string },
            { dataSources }: ServerContext
        ): Promise<VaccineCoverage> {
            try {
                return await dataSources.lmao.getVaccineCoverage(name)
            } catch (error) {
                // Log the error
                console.error(`Failed to fetch vaccine coverage data for country ${name}:`, error)
                throw new Error(`Failed to fetch vaccine coverage data for country ${name}`)
            }
        }
    }
}

export default vaccineCoverageResolver
