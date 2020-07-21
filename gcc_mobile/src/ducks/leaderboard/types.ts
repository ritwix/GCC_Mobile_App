import { Region } from "../../../utilities/urls"

export interface LeaderboardMenuState {
    leaderboardType: LeaderboardType
    region: Region
}

export enum LeaderboardType {
    INDIVIDUAL,
    UNIVERSITY,
    REFERRAL
}