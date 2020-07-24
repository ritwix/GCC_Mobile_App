import { Contestant } from './types'
import MockAdapter from 'axios-mock-adapter'
import { getUrl, Region } from '../../../utilities/urls'

const getRandom = (score: number, total: number) => {
    return Math.random() * Math.floor(score) * total
}

const getReferrals = () => {
    return Math.floor(Math.random() * Math.floor(30))
}

const contestant = (position: number) => {
    const referrals = getReferrals()
    const total = getRandom(referrals, 600)
    const multiplyingFactor = 1 + (referrals / 100.0)

    return {
        position,
        name: "Kunal Wagle",
        university: "Imperial College London",
        referrals,
        combinedScore: total,
        id: '123456',
        teamId: '123456',
        multiplyingFactor,
        total: multiplyingFactor * total
    }
}

const contestant2 = (position: number) => {
    const referrals = getReferrals()
    const total = getRandom(referrals, 600)
    const multiplyingFactor = 1 + (referrals / 100.0)

    return {
        position,
        name: "Rahul Kothare",
        university: "Kings College London",
        teamId: '123456',
        id: '123456',
        referrals,
        combinedScore: total,
        multiplyingFactor,
        total: multiplyingFactor * total
    }
}

const contestants = (start: number, total: number) => {
    let contestants: Contestant[] = []
    for (let i=1; i<total; i=i+2) {
        contestants.push(contestant(start+i))
        contestants.push(contestant2(start+i+1))
    }
    return contestants
}

export const configureMock = (mock: MockAdapter) => {
    mock
        .onGet(`${getUrl(Region.GLOBAL)}referralLeaderboard?from=0&limit=20`)
        .reply(200, {
            contestants: contestants(0, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 52
        })
        .onGet(`${getUrl(Region.GLOBAL)}referralLeaderboard?from=20&limit=20`)
        .reply(200, {
            contestants: contestants(20, 20),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 52
        })
        .onGet(`${getUrl(Region.GLOBAL)}referralLeaderboard?from=40&limit=20`)
        .reply(200, {
            contestants: contestants(40, 12),
            timestamp: 'Wednesday 8th September, 14:26 GMT',
            totalContestants: 52
        })
        .onAny()
        .passThrough()

}