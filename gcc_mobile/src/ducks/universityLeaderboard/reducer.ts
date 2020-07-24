import { UniversityLeaderboardState, UniversityLeaderboard } from './types'
import { Action, handleActions } from 'redux-actions'
import { isError } from 'flux-standard-action'
import { LeaderboardActions } from './actions'
import { Region } from 'src/utilities/urls'
import _ from "lodash";

export const initialState: UniversityLeaderboardState = {
    loading: false,
    region: Region.DEFAULT,
    maxShown: 0,
    allUniversities: [],
    fetchedLeaderboard: false,
    loadingNext: false
}

const leaderboardRequested = (state: UniversityLeaderboardState, action: Action<any>): UniversityLeaderboardState => {
    return {
        ...state,
        loading: true,
        region: action.payload,
        fetchedLeaderboard: true,
    }
}

const addRequested = (state: UniversityLeaderboardState, action: Action<any>): UniversityLeaderboardState => {
    return {
        ...state,
        loadingNext: true,
        region: action.payload,
        fetchedLeaderboard: true,
    }
}

const leaderboardReceived = (state: UniversityLeaderboardState, action: Action<any>): UniversityLeaderboardState => {
    return {
        ...state,
        loading: false,
        details: action.payload,
        maxShown: 20,
        allUniversities: action.payload.universities,
        fetchedLeaderboard: true,
        faulted: isError(action)
    }
}

const nextReceived = (state: UniversityLeaderboardState, action: Action<any>): UniversityLeaderboardState => {
    console.log("Completed a next run - maxShown is " + state.maxShown)
    const details = state.details as UniversityLeaderboard
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

const leaderboardSearch = (state: UniversityLeaderboardState, action: Action<any>): UniversityLeaderboardState => {
    let contestants = state.allUniversities
    let filteredContestants = _.filter(contestants, function (element) {
        if (((element.name).toLowerCase()).includes(action.payload.toLowerCase()))
            return element.name;
    });
    console.log(filteredContestants)
    return {
        ...state,
        details: {universities: filteredContestants}
    }

}

const resetLeaderboard = (state: UniversityLeaderboardState): UniversityLeaderboardState => {
    return {
        ...state,
        fetchedLeaderboard: false
    }
}


const reducer = handleActions(
    {
        [LeaderboardActions.REQUESTED]: leaderboardRequested,
        [LeaderboardActions.RECEIVED]: leaderboardReceived,
        [LeaderboardActions.ADD]: addRequested,
        [LeaderboardActions.NEXT]: nextReceived,
        [LeaderboardActions.SEARCH]: leaderboardSearch,
        [LeaderboardActions.RESET]: resetLeaderboard
    },
    initialState
)

export default reducer