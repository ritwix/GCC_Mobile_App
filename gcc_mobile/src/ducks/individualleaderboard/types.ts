import { RemoteResource } from '../../../utilities'
import { Region } from '../../../utilities/urls'

export interface LeaderboardState extends RemoteResource<Leaderboard> {
    region: Region
    maxShown: number
    allContestants: []
    fetchedLeaderboard: boolean
    loadingNext: boolean
}

export interface Leaderboard {
    contestants: Contestant[]
    timestamp: string
    totalContestants: number
}

export interface Contestant {
    contestantId: string
    teamId: string
    position: number
    name: string
    teamName: string
    scores: Score[]
    total: number
}

export interface Score {
    questionNumber: number
    correct: number
    incorrect: number
    timedOut: number
    total: number
}