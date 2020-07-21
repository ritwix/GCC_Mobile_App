import { createAction } from 'redux-actions'
import { University, UniversityLeaderboard } from './types'
import { Region } from 'src/utilities/urls'

export namespace LeaderboardActions {
    export const REQUESTED = 'UNIVERSITY_LEADERBOARD/REQUESTED'
    export const RECEIVED = 'UNIVERSITY_LEADERBOARD/RECEIVED'
    export const NEXT = 'UNIVERSITY_LEADERBOARD/NEXT'
    export const ADD = 'UNIVERSITY_LEADERBOARD/ADD'
    export const EXPAND_UNIVERSITY = 'UNIVERSITY_LEADERBOARD/EXPAND_UNIVERSITY'
    export const SEARCH = 'UNIVERSITY_LEADERBOARD/SEARCH'
    export const RESET = 'UNIVERSITY_LEADERBOARD/RESET'
}

export const leaderboardRequested = createAction<Region>(LeaderboardActions.REQUESTED)
export const addRequested = createAction<Region>(LeaderboardActions.ADD)
export const reloadReceived = createAction<UniversityLeaderboard>(LeaderboardActions.RECEIVED)
export const nextReceived = createAction<UniversityLeaderboard>(LeaderboardActions.NEXT)
export const leaderboardSearch = createAction<string>(LeaderboardActions.SEARCH)
export const expandContestant = createAction<University>(LeaderboardActions.EXPAND_UNIVERSITY)
export const resetUniLeaderboard = createAction(LeaderboardActions.RESET)