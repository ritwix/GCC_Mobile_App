import { createAction } from 'redux-actions'
import { University, PositionProgress, ScoreGraph, GradGraph } from './types'

export namespace UniProfileActions {
    export const UPDATE_GRAPH = 'UNI_PROFILE/UPDATE_GRAPH'
    export const STATS_REQUESTED = 'UNI_PROFILE/STATS_REQUESTED'
    export const STATS_RECEIVED = 'UNI_PROFILE/STATS_RECEIVED'
    export const POSITION_REQUESTED = 'UNI_PROFILE/POSITION_REQUESTED'
    export const POSITION_RECEIVED = 'UNI_PROFILE/POSITION_RECEIVED'
    export const SCORE_REQUESTED = 'UNI_PROFILE/SCORE_REQUESTED'
    export const SCORE_RECEIVED = 'UNI_PROFILE/SCORE_RECEIVED'
    export const GRAD_REQUESTED = 'UNI_PROFILE/GRAD_REQUESTED'
    export const GRAD_RECEIVED = 'UNI_PROFILE/GRAD_RECEIVED'
}

export const updateGraph = createAction<number>(UniProfileActions.UPDATE_GRAPH)
export const statsRequested = createAction<string>(UniProfileActions.STATS_REQUESTED)
export const statsReceived = createAction<University>(UniProfileActions.STATS_RECEIVED)
export const positionRequested = createAction<string>(UniProfileActions.POSITION_REQUESTED)
export const positionReceived = createAction<PositionProgress>(UniProfileActions.POSITION_RECEIVED)
export const scoreRequested = createAction<string>(UniProfileActions.SCORE_REQUESTED)
export const scoreReceived = createAction<ScoreGraph>(UniProfileActions.SCORE_RECEIVED)
export const gradRequested = createAction<string>(UniProfileActions.GRAD_REQUESTED)
export const gradReceived = createAction<GradGraph>(UniProfileActions.GRAD_RECEIVED)