import { University, Score } from './types'
import { sumBy } from 'lodash'
import MockAdapter from 'axios-mock-adapter'
import { getUrl, Region } from '../../../utilities/urls'

const getRandom = () => {
    return Math.random() * Math.floor(100)
}

const getScores = () => {
    let scores: Score[] = []
    for (let i=0; i<6; i++) {
        scores.push({
            question: i+1,
            total: getRandom()
        })
    }
    return scores
}

const contestant = (position: number) => {
    const questionTotals = getScores()
    return {
        position,
        id: '123456',
        name: "Imperial College London",
        questionTotals,
        total: sumBy(questionTotals, 'total')
    }
}

export const universities = (start: number, total: number) => {
    let contestants: University[] = []
    for (let i=0; i<total; i++) {
        contestants.push(contestant(start+i+1))
    }
    return contestants
}

export const configureMock = (mock: MockAdapter) => {
    mock
        .onGet(`${getUrl(Region.UK)}universityLeaderboard?from=0&limit=20`)
        .reply(200, {
            universities: universities(0, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 35
        })
        .onGet(`${getUrl(Region.UK)}universityLeaderboard?from=20&limit=20`)
        .reply(200, {
            universities: universities(20, 15),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 35
        })
        .onGet(`${getUrl(Region.AMER)}universityLeaderboard?from=0&limit=20`)
        .reply(200, {
            universities: universities(0, 14),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 14
        })
        .onGet(`${getUrl(Region.POLAND)}universityLeaderboard?from=0&limit=20`)
        .reply(200, {
            universities: universities(0, 15),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 15
        })
        .onGet(`${getUrl(Region.INDIA)}universityLeaderboard?from=0&limit=20`)
        .reply(200, {
            universities: universities(0, 9),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 9
        })
        .onGet(`${getUrl(Region.SWIS)}universityLeaderboard?from=0&limit=20`)
        .reply(200, {
            universities: universities(0, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 22
        })
        .onGet(`${getUrl(Region.SWIS)}universityLeaderboard?from=20&limit=20`)
        .reply(200, {
            universities: universities(20, 2),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 22
        })
        .onGet(`${getUrl(Region.GLOBAL)}universityLeaderboard?from=0&limit=20`)
        .reply(200, {
            universities: universities(0, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 30
        })
        .onGet(`${getUrl(Region.GLOBAL)}universityLeaderboard?from=20&limit=20`)
        .reply(200, {
            universities: universities(20, 10),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 30
        })
}

