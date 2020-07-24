import { createAction } from 'redux-actions'
import { Contestant, ReferralLeaderboard } from './types'

export namespace LeaderboardActions {
    export const REQUESTED = 'REFERRAL_LEADERBOARD/REQUESTED'
    export const RECEIVED = 'REFERRAL_LEADERBOARD/RECEIVED'
    export const NEXT = 'REFERRAL_LEADERBOARD/NEXT'
    export const SEARCH = 'REFERRAL_LEADERBOARD/SEARCH'
    export const EXPAND_CONTESTANT = 'REFERRAL_LEADERBOARD/EXPAND_CONTESTANT'
}

export const leaderboardRequested = createAction(LeaderboardActions.REQUESTED)
export const reloadReceived = createAction<ReferralLeaderboard>(LeaderboardActions.RECEIVED)
export const nextReceived = createAction<ReferralLeaderboard>(LeaderboardActions.NEXT)
export const leaderboardSearch = createAction<string>(LeaderboardActions.SEARCH)
export const expandContestant = createAction<Contestant>(LeaderboardActions.EXPAND_CONTESTANT)