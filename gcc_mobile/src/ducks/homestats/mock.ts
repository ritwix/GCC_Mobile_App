import { Facts } from './types'
import { sumBy } from 'lodash'
import MockAdapter from 'axios-mock-adapter'
import { getUrl, Region } from '../../../utilities/urls'

const facts = {
    uk: {
        region: Region.UK,
        leadingIndividual: 'Kunal Wagle',
        leadingTeam: 'Imperial College London',
        numberOfIndividuals: 462
    } as Facts,
    us: {
        region: Region.AMER,
        leadingIndividual: 'Alvina Kuhai',
        leadingTeam: 'Stanford University',
        numberOfIndividuals: 729
    } as Facts,
    pl: {
        region: Region.POLAND,
        leadingIndividual: 'Harry Brown',
        leadingTeam: 'Wroclaw University',
        numberOfIndividuals: 185
    } as Facts,
    in: {
        region: Region.INDIA,
        leadingIndividual: 'Rahul Kothare',
        leadingTeam: 'IIT Bangalore',
        numberOfIndividuals: 1212
    } as Facts,
    ch: {
        region: Region.SWIS,
        leadingIndividual: 'Cristian Mereuta',
        leadingTeam: 'Zurich',
        numberOfIndividuals: 159
    } as Facts,
    gl: {
        region: Region.GLOBAL,
        leadingIndividual: 'Kunal Wagle',
        leadingTeam: 'Imperial College London',
        numberOfIndividuals: 2674
    } as Facts
}

export const configureMock = (mock: MockAdapter) => {
    mock
        .onGet(`${getUrl(Region.UK)}facts/quick`)
        .reply(200, facts[Region.UK])
        .onGet(`${getUrl(Region.AMER)}facts/quick`)
        .reply(200, facts[Region.AMER])
        .onGet(`${getUrl(Region.INDIA)}facts/quick`)
        .reply(200, facts[Region.INDIA])
        .onGet(`${getUrl(Region.POLAND)}facts/quick`)
        .reply(200, facts[Region.POLAND])
        .onGet(`${getUrl(Region.SWIS)}facts/quick`)
        .reply(200, facts[Region.SWIS])
        .onGet(`${getUrl(Region.GLOBAL)}facts/quick`)
        .reply(200, facts[Region.GLOBAL])
}