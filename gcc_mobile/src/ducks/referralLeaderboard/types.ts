import { RemoteResource } from '../../../utilities'

export interface ReferralLeaderboardState extends RemoteResource<ReferralLeaderboard> {
    allContestants: []
    maxShown: number
}

export interface ReferralLeaderboard {
    contestants: Contestant[]
    timestamp: string,
    totalContestants: number
}

export interface Contestant {
    position: number
    name: string
    university: string
    teamId: string
    id: string
    referrals: number
    combinedScore: number
    multiplyingFactor: number
    total: number
}