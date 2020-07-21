import {LeaderboardMenuState, LeaderboardType} from './types'
import {Action, handleActions} from 'redux-actions'
import { LeaderboardMenuActions } from './actions'
import { Region } from '../../../utilities/urls'

export const initialState: LeaderboardMenuState = {
    leaderboardType: LeaderboardType.INDIVIDUAL,
    region: Region.UK
}

const leaderboardChanged = (state: LeaderboardMenuState, action: Action<any>): LeaderboardMenuState => {
    return {
        ...state,
        leaderboardType: action.payload
    }
}

const regionChanged = (state: LeaderboardMenuState, action: Action<any>): LeaderboardMenuState => {
    return {
        ...state,
        region: action.payload
    }
}

const reducer = handleActions(
    {
        [LeaderboardMenuActions.TYPE_CHANGED]: leaderboardChanged,
        [LeaderboardMenuActions.REGION_CHANGED]: regionChanged
        
    },
    initialState
)

export default reducer