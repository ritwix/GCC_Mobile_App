import { RemoteResource } from '../../../utilities'
import { Region } from '../../../utilities/urls'

export interface UniversityLeaderboardState extends RemoteResource<UniversityLeaderboard> {
    region: Region
    maxShown: number
    allUniversities: []
    loadingNext: boolean
    fetchedLeaderboard: boolean
}

export interface UniversityLeaderboard {
    contestants: University[]
    timestamp: string
}

export interface University {
    teamName: string
    id: string
    position: number
    questionTotals: Score[]
    total: number
}

export interface Score {
    question: number
    total: number
}