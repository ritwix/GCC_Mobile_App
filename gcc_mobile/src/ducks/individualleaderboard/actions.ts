import { createAction } from 'redux-actions'
import { Contestant, Leaderboard } from './types'
import { Region } from 'src/utilities/urls'

export namespace LeaderboardActions {
    export const REQUESTED = 'LEADERBOARD/REQUESTED'
    export const RECEIVED = 'LEADERBOARD/RECEIVED'
    export const ADD = 'LEADERBOARD/ADD'
    export const EXPAND_CONTESTANT = 'LEADERBOARD/EXPAND_CONTESTANT'
    export const NEXT = 'LEADERBOARD/NEXT'
    export const SEARCH = 'LEADERBOARD/SEARCH'
    export const RESET = 'LEADERBOARD/RESET'
}

export const leaderboardRequested = createAction<Region>(LeaderboardActions.REQUESTED)
export const addRequested = createAction<Region>(LeaderboardActions.ADD)
export const reloadReceived = createAction<Leaderboard>(LeaderboardActions.RECEIVED)
export const nextReceived = createAction<Leaderboard>(LeaderboardActions.NEXT)
export const expandContestant = createAction<Contestant>(LeaderboardActions.EXPAND_CONTESTANT)
export const leaderboardSearch = createAction<string>(LeaderboardActions.SEARCH)
export const resetLeaderboard = createAction(LeaderboardActions.RESET)