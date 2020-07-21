import {ReferralLeaderboardState, ReferralLeaderboard} from './types'
import {Action, handleActions} from 'redux-actions'
import {isError} from 'flux-standard-action'
import {LeaderboardActions} from './actions'
import _ from 'lodash'

export const initialState: ReferralLeaderboardState = {
    loading: false,
    maxShown: 0,
    allContestants: []
}

const leaderboardRequested = (state: ReferralLeaderboardState, action: Action<any>): ReferralLeaderboardState => {
    return {
        ...state,
        loading: true
    }
}

const leaderboardReceived = (state: ReferralLeaderboardState, action: Action<any>): ReferralLeaderboardState => {
    return {
        ...state,
        loading: false,
        details: action.payload,
        allContestants: action.payload.contestants,
        maxShown: 20,
        faulted: isError(action)
    }
}

const nextReceived = (state: ReferralLeaderboardState, action: Action<any>): ReferralLeaderboardState => {
    console.log("Completed a next run - maxShown is " + state.maxShown)
    const details = state.details as ReferralLeaderboard
    const detailsClone = {
        ...details
    }
    const contestants = detailsClone.contestants
    return {
        ...state,
        loading: false,
        details: {
            ...details,
            contestants: contestants.concat(action.payload.contestants),
            timestamp: action.payload.timestamp,
            totalContestants: action.payload.totalContestants
        } as any,
        maxShown: state.maxShown + 20,
        faulted: isError(action)
    }
}

const leaderboardSearch = (state: ReferralLeaderboardState, action: Action<any>): ReferralLeaderboardState => {
    let contestants = state.allContestants
    let filteredContestants = _.filter(contestants, function (element) {
        if (((element.name).toLowerCase()).includes(action.payload.toLowerCase()))
            return element.name;
    });
    console.log(filteredContestants)
    return {
        ...state,
        details: {contestants: filteredContestants}
    }

}
const reducer = handleActions(
    {
        [LeaderboardActions.REQUESTED]: leaderboardRequested,
        [LeaderboardActions.RECEIVED]: leaderboardReceived,
        [LeaderboardActions.SEARCH]: leaderboardSearch,
        [LeaderboardActions.NEXT]: nextReceived
    },
    initialState
)

export default reducer