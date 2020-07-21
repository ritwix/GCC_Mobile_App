import { createAction } from 'redux-actions'
import { LeaderboardType } from './types'
import { Region } from '../../../utilities/urls'

export namespace LeaderboardMenuActions {
    export const TYPE_CHANGED = 'LEADERBOARD_MENU/TYPE'
    export const REGION_CHANGED = 'LEADERBOARD_MENU/REGION'
}

export const leaderboardChanged = createAction<LeaderboardType>(LeaderboardMenuActions.TYPE_CHANGED)
export const regionChanged = createAction<Region>(LeaderboardMenuActions.REGION_CHANGED)
