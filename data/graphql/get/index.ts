
import AquaClient from '../client'
import { HOME } from '../queries/queries'
import { Home } from '../schema'

const aquaClient = new AquaClient(`https://spikeapistaging.tech/graphql`)

// gets data for the home page

export const homeDataForCountry = async (countryCode : string) : Promise<Home> => {
    const data = await aquaClient.query({
        query: HOME,
        variables: { countryCode}
    })

    return data.data.data.homes[0] as Home
}