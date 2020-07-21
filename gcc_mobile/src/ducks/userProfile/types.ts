import { RemoteResource } from "../../../utilities"
import { Region } from "../../../utilities/urls"
import { Score } from "../individualleaderboard"
import { LineSerieData } from "@nivo/circle-packing"

export interface UserProfileState {
    user: RemoteResource<User>
    positionProgressGraph: PosGraph
    averagePositionGraph: PosGraph
    testResultsGraph: SG
    graphOnDisplay: number
    userId: string
}

export interface PosGraph extends RemoteResource<PositionProgress> {
    userId: string
}

export interface SG extends RemoteResource<TestResults> {
    userId: string
}

export interface User {
    id: string
    gitAvatar: string
    name: string
    position: number
    positionWithinTeam: number
    region: Region
    scores: Score[]
    team: string
    teamPosition: number
    total: number
    teamLogo: string
}

export interface PositionProgress {
    data: LineSerieData[],
    max: number,
    min: number
}

export interface BubbleData {
    name: string
    color: string
    children?: BubbleData[]
    value?: number
}

export interface TestResults {
    data: BubbleData
}