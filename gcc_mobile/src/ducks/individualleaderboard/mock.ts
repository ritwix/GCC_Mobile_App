import { Contestant, Score } from './types'
import { sumBy } from 'lodash'
import MockAdapter from 'axios-mock-adapter'
import { getUrl, Region } from '../../../utilities/urls'

const getRandom = () => {
    return Math.random() * Math.floor(100)
}

const getScores = () => {
    let scores: Score[] = []
    for (let i=0; i<6; i++) {
        const timedOut = Math.floor(Math.random() * Math.floor(50))
        const correct = Math.floor(Math.random() * Math.floor(50))
        const incorrect = 100 - timedOut - correct
        scores.push({
            questionNumber: i+1,
            correct,
            incorrect,
            timedOut,
            score: getRandom()
        })
    }
    return scores
}

const contestant = (position: number) => {
    const scores = getScores()
    return {
        id: '123456',
        teamId: '123456',
        position,
        name: "Kunal Wagle",
        university: "Imperial College London",
        scores,
        total: sumBy(scores, 'score')
    }
}

export const contestants = (start: number, total: number) => {
    let contestants: Contestant[] = []
    for (let i=0; i<total; i++) {
        contestants.push(contestant(start+i+1))
    }
    return contestants
}

export const configureMock = (mock: MockAdapter) => {
    mock
        .onGet(`${getUrl(Region.UK)}leaderboard?from=0&limit=20`)
        .reply(200, {
            contestants: contestants(0, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 34
        })
        .onGet(`${getUrl(Region.UK)}leaderboard?from=20&limit=20`)
        .reply(200, {
            contestants: contestants(20, 14),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 34
        })
        .onGet(`${getUrl(Region.UK)}leaderboard?from=40&limit=20`)
        .reply(200, {
            contestants: contestants(34, 0),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 34
        })
        .onGet(`${getUrl(Region.UK)}leaderboard?from=60&limit=20`)
        .reply(200, {
            contestants: contestants(34, 0),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 34
        })
        .onGet(`${getUrl(Region.AMER)}leaderboard?from=0&limit=20`)
        .reply(200, {
            contestants: contestants(0, 10),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 10
        })
        .onGet(`${getUrl(Region.INDIA)}leaderboard?from=0&limit=20`)
        .reply(200, {
            contestants: contestants(0, 17),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 17
        })
        .onGet(`${getUrl(Region.POLAND)}leaderboard?from=0&limit=20`)
        .reply(200, {
            contestants: contestants(0, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 49
        })
        .onGet(`${getUrl(Region.POLAND)}leaderboard?from=20&limit=20`)
        .reply(200, {
            contestants: contestants(20, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 49
        })
        .onGet(`${getUrl(Region.POLAND)}leaderboard?from=40&limit=20`)
        .reply(200, {
            contestants: contestants(40, 9),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 49
        })
        .onGet(`${getUrl(Region.POLAND)}leaderboard?from=60&limit=20`)
        .reply(200, {
            contestants: contestants(60, 0),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 49
        })
        .onGet(`${getUrl(Region.SWIS)}leaderboard?from=0&limit=20`)
        .reply(200, {
            contestants: contestants(0, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 23
        })
        .onGet(`${getUrl(Region.SWIS)}leaderboard?from=20&limit=20`)
        .reply(200, {
            contestants: contestants(20, 3),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 23
        })
        .onGet(`${getUrl(Region.GLOBAL)}leaderboard?from=0&limit=20`)
        .reply(200, {
            contestants: contestants(0, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 120
        })
        .onGet(`${getUrl(Region.GLOBAL)}leaderboard?from=20&limit=20`)
        .reply(200, {
            contestants: contestants(20, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 120
        })
        .onGet(`${getUrl(Region.GLOBAL)}leaderboard?from=40&limit=20`)
        .reply(200, {
            contestants: contestants(40, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 120
        })
        .onGet(`${getUrl(Region.GLOBAL)}leaderboard?from=60&limit=20`)
        .reply(200, {
            contestants: contestants(60, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 120
        })
        .onGet(`${getUrl(Region.GLOBAL)}leaderboard?from=80&limit=20`)
        .reply(200, {
            contestants: contestants(80, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 120
        })
        .onGet(`${getUrl(Region.GLOBAL)}leaderboard?from=100&limit=20`)
        .reply(200, {
            contestants: contestants(100, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 120
        })

}