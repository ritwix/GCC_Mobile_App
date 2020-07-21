import { RemoteResource } from '../../../utilities'
import { Contestant } from '../individualleaderboard'
import { University } from '../universityLeaderboard'

export interface RegionState extends RemoteResource<RegionFacts> {
    fetched: boolean
}

export interface RegionFacts {
    individualLeaderboard: Contestant[]
    universityLeaderboard: University[]
    headlines: News[]
}

export interface News {
    id: string
    title: string
    body: string
    imageUrl: string
}