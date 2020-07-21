import { handleActions, Action } from "redux-actions"
import { UserProfileActions } from "./actions"
import { UserProfileState } from "./types"
import { isError } from "flux-standard-action"

export const initialState: UserProfileState = {
    user: {
        loading: false
    },
    positionProgressGraph: {
        loading: false,
        userId: ''
    },
    averagePositionGraph: {
        loading: false,
        userId: ''
    },
    testResultsGraph: {
        loading: false,
        userId: ''
    },
    graphOnDisplay: 0,
    userId: ''
}

const userRequested = (state: UserProfileState, action: Action<any>): UserProfileState => {
    return {
        ...state,
        user: {
            ...state.user,
            loading: true
        },
        userId: action.payload
    }
}

const userReceived = (state: UserProfileState, action: Action<any>): UserProfileState => {
    return {
        ...state,
        user: {
            ...state.user,
            loading: false,
            details: action.payload,
            faulted: isError(action)
        }
    }
}

const positionRequested = (state: UserProfileState, action: Action<any>): UserProfileState => {
    return {
        ...state,
        positionProgressGraph: {
            ...state.positionProgressGraph,
            loading: true,
            userId: action.payload
        }
    }
}

const positionReceived = (state: UserProfileState, action: Action<any>): UserProfileState => {
    return {
        ...state,
        positionProgressGraph: {
            ...state.positionProgressGraph,
            loading: false,
            details: action.payload,
            faulted: isError(action)
        }
    }
}

const averageRequested = (state: UserProfileState, action: Action<any>): UserProfileState => {
    return {
        ...state,
        averagePositionGraph: {
            ...state.averagePositionGraph,
            loading: true,
            userId: action.payload
        }
    }
}

const averageReceived = (state: UserProfileState, action: Action<any>): UserProfileState => {
    return {
        ...state,
        averagePositionGraph: {
            ...state.averagePositionGraph,
            loading: false,
            details: action.payload,
            faulted: isError(action)
        }
    }
}

const testsRequested = (state: UserProfileState, action: Action<any>): UserProfileState => {
    return {
        ...state,
        testResultsGraph: {
            ...state.testResultsGraph,
            loading: true,
            userId: action.payload
        }
    }
}

const testsReceived = (state: UserProfileState, action: Action<any>): UserProfileState => {
    return {
        ...state,
        testResultsGraph: {
            ...state.testResultsGraph,
            loading: false,
            details: action.payload,
            faulted: isError(action)
        }
    }
}

const updateGraph = (state: UserProfileState, action: Action<any>): UserProfileState => {
    return {
        ...state,
        graphOnDisplay: action.payload
    }
}



const reducer = handleActions(
    {
        [UserProfileActions.STATS_REQUESTED]: userRequested,
        [UserProfileActions.STATS_RECEIVED]: userReceived,
        [UserProfileActions.POSITION_REQUESTED]: positionRequested,
        [UserProfileActions.POSITION_RECEIVED]: positionReceived,
        [UserProfileActions.AVERAGE_REQUESTED]: averageRequested,
        [UserProfileActions.AVERAGE_RECEIVED]: averageReceived,
        [UserProfileActions.RESULTS_REQUESTED]: testsRequested,
        [UserProfileActions.RESULTS_RECEIVED]: testsReceived,
        [UserProfileActions.UPDATE_GRAPH]: updateGraph
    },
    initialState
)

export default reducer