import { RemoteResource } from "../../../utilities"
import { Region } from "../../../utilities/urls"
import { Contestant } from "../individualleaderboard"
import { BarDatum } from "@nivo/bar"
import { LineSerieData } from "@nivo/line"

export interface UniProfileState {
    university: RemoteResource<University>
    positionProgressGraph: PosGraph
    averagePositionGraph: GG
    testResultsGraph: SG
    graphOnDisplay: number
    uniId: string
}

export interface PosGraph extends RemoteResource<PositionProgress> {
    uniId: string
}

export interface GG extends RemoteResource<GradGraph> {
    uniId: string
}

export interface SG extends RemoteResource<ScoreGraph> {
    uniId: string
}

export interface University {
    id: string
    logo: string
    name: string
    position: number
    region: Region
    totalContestants: number
    total: number
    contestants: Contestant[]
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

export interface ScoreGraph {
    data: BubbleData
}

export interface GradGraph {
    data: BarDatum[]
}