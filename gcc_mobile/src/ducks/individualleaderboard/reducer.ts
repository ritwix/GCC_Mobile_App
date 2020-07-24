import {LeaderboardState, Leaderboard} from './types'
import {Action, handleActions} from 'redux-actions'
import {isError} from 'flux-standard-action'
import {LeaderboardActions, resetLeaderboard} from './actions'
import {Region} from 'src/utilities/urls'
import _ from "lodash";
import { LeaderboardMenuState } from '../leaderboard';

export const initialState: LeaderboardState = {
    maxShown: 0,
    loading: false,
    region: Region.DEFAULT,
    allContestants: [],
    fetchedLeaderboard: false
}

const leaderboardRequested = (state: LeaderboardState, action: Action<any>): LeaderboardState => {
    return {
        ...state,
        loading: true,
        fetchedLeaderboard: true,
        region: action.payload
    }
}

const nextRequested = (state: LeaderboardState, action: Action<any>): LeaderboardState => {
    return {
        ...state,
        loadingNext: true,
        fetchedLeaderboard: true,
        region: action.payload
    }
}

const leaderboardReceived = (state: LeaderboardState, action: Action<any>): LeaderboardState => {
    console.log("Completed a reload run - maxShown is " + state.maxShown)
    return {
        ...state,
        loading: false,
        details: action.payload,
        fetchedLeaderboard: true,
        maxShown: 20,
        allContestants: action.payload.contestants,
        faulted: isError(action)
    }
}

const nextReceived = (state: LeaderboardState, action: Action<any>): LeaderboardState => {
    console.log("Completed a next run - maxShown is " + state.maxShown)
    const details = state.details as Leaderboard
    const detailsClone = {
        ...details
    }
    const contestants = detailsClone.contestants
    return {
        ...state,
        loading: false,
        fetchedLeaderboard: true,
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

const leaderboardSearch = (state: LeaderboardState, action: Action<any>): LeaderboardState => {
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

const leaderboardReset = (state: LeaderboardState): LeaderboardState => {
    return {
        ...state,
        fetchedLeaderboard: false
    }
}

const reducer = handleActions(
    {
        [LeaderboardActions.REQUESTED]: leaderboardRequested,
        [LeaderboardActions.RECEIVED]: leaderboardReceived,
        [LeaderboardActions.ADD]: nextRequested,
        [LeaderboardActions.NEXT]: nextReceived,
        [LeaderboardActions.SEARCH]: leaderboardSearch,
        [LeaderboardActions.RESET]: leaderboardReset
    },
    initialState
)

export default reducer