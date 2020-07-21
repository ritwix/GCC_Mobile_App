import { createAction } from 'redux-actions'
import { User, PositionProgress } from './types';

export namespace UserProfileActions {
    export const UPDATE_GRAPH = 'USER_PROFILE/UPDATE_GRAPH'
    export const STATS_REQUESTED = 'USER_PROFILE/STATS_REQUESTED'
    export const STATS_RECEIVED = 'USER_PROFILE/STATS_RECEIVED'
    export const POSITION_REQUESTED = 'USER_PROFILE/POSITION_REQUESTED'
    export const POSITION_RECEIVED = 'USER_PROFILE/POSITION_RECEIVED'
    export const AVERAGE_REQUESTED = 'USER_PROFILE/AVERAGE_REQUESTED'
    export const AVERAGE_RECEIVED = 'USER_PROFILE/AVERAGE_RECEIVED'
    export const RESULTS_REQUESTED = 'USER_PROFILE/RESULTS_REQUESTED'
    export const RESULTS_RECEIVED = 'USER_PROFILE/RESULTS_RECEIVED'
}

export const updateGraph = createAction<number>(UserProfileActions.UPDATE_GRAPH)
export const statsRequested = createAction<string>(UserProfileActions.STATS_REQUESTED)
export const statsReceived = createAction<User>(UserProfileActions.STATS_RECEIVED)
export const positionRequested = createAction<string>(UserProfileActions.POSITION_REQUESTED)
export const positionReceived = createAction<PositionProgress>(UserProfileActions.POSITION_RECEIVED)
export const averageRequested = createAction<string>(UserProfileActions.AVERAGE_REQUESTED)
export const averageReceived = createAction(UserProfileActions.AVERAGE_RECEIVED)
export const resultsRequested = createAction<string>(UserProfileActions.RESULTS_REQUESTED)
export const resultsReceived = createAction(UserProfileActions.RESULTS_RECEIVED)