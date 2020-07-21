import { News } from './types'
import MockAdapter from 'axios-mock-adapter'
import { getUrl, Region } from '../../../utilities/urls'
import { contestants } from '../individualleaderboard/mock'
import { universities } from '../universityLeaderboard/mock'

const body = ""

export const news: News[] = [
    {
        id: "123456",
        title: "UCL dominates first week",
        body,
        imageUrl: "brandnet/image1.jpg"
    },
    {
        id: "234567",
        title: "LSE student dominates early competition",
        body,
        imageUrl: "brandnet/image2"
    },
    {
        id: "345678",
        title: "Code your way to the new iPhone XS",
        body,
        imageUrl: "brandnet/image3"
    },
    {
        id: "456789",
        title: "Four-way race to the top",
        body,
        imageUrl: "brandnet/image4"
    },
    {
        id: "567890",
        title: "It's all one university's to lose",
        body,
        imageUrl: "brandnet/image5"
    }
]

export const configureMock = (mock: MockAdapter) => {
    mock
        .onGet(`${getUrl(Region.UK)}region/facts`)
        .reply(200, {
            individualLeaderboard: contestants(0, 5),
            universityLeaderboard: universities(0, 5),
            news            
        })
        .onGet(`${getUrl(Region.AMER)}region/facts`)
        .reply(200, {
            individualLeaderboard: contestants(0, 5),
            universityLeaderboard: universities(0, 5),
            news
        })
        .onGet(`${getUrl(Region.INDIA)}region/facts`)
        .reply(200, {
            individualLeaderboard: contestants(0, 5),
            universityLeaderboard: universities(0, 5),
            news
        })
        .onGet(`${getUrl(Region.POLAND)}region/facts`)
        .reply(200, {
            individualLeaderboard: contestants(0, 5),
            universityLeaderboard: universities(0, 5),
            news
        })
        .onGet(`${getUrl(Region.SWIS)}region/facts`)
        .reply(200, {
            individualLeaderboard: contestants(0, 5),
            universityLeaderboard: universities(0, 5),
            news
        })
        .onGet(`${getUrl(Region.GLOBAL)}region/facts`)
        .reply(200, {
            individualLeaderboard: contestants(0, 5),
            universityLeaderboard: universities(0, 5),
            news
        })

}