import { handleActions, Action } from "redux-actions"
import { UniProfileActions } from "./actions"
import { UniProfileState } from "./types"
import { isError } from "flux-standard-action"

export const initialState: UniProfileState = {
    university: {
        loading: false
    },
    positionProgressGraph: {
        loading: false,
        uniId: ''
    },
    averagePositionGraph: {
        loading: false,
        uniId: ''
    },
    testResultsGraph: {
        loading: false,
        uniId: ''
    },
    graphOnDisplay: 0,
    uniId: ''
}

const userRequested = (state: UniProfileState, action: Action<any>): UniProfileState => {
    return {
        ...state,
        university: {
            ...state.university,
            loading: true
        },
        uniId: action.payload
    }
}

const userReceived = (state: UniProfileState, action: Action<any>): UniProfileState => {
    return {
        ...state,
        university: {
            ...state.university,
            loading: false,
            details: action.payload,
            faulted: isError(action)
        }
    }
}

const positionRequested = (state: UniProfileState, action: Action<any>): UniProfileState => {
    return {
        ...state,
        positionProgressGraph: {
            ...state.positionProgressGraph,
            loading: true,
            uniId: action.payload
        }
    }
}

const positionReceived = (state: UniProfileState, action: Action<any>): UniProfileState => {
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

const averageRequested = (state: UniProfileState, action: Action<any>): UniProfileState => {
    return {
        ...state,
        averagePositionGraph: {
            ...state.averagePositionGraph,
            loading: true,
            uniId: action.payload
        }
    }
}

const averageReceived = (state: UniProfileState, action: Action<any>): UniProfileState => {
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

const testsRequested = (state: UniProfileState, action: Action<any>): UniProfileState => {
    return {
        ...state,
        testResultsGraph: {
            ...state.testResultsGraph,
            loading: true,
            uniId: action.payload
        }
    }
}

const testsReceived = (state: UniProfileState, action: Action<any>): UniProfileState => {
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

const updateGraph = (state: UniProfileState, action: Action<any>): UniProfileState => {
    return {
        ...state,
        graphOnDisplay: action.payload
    }
}



const reducer = handleActions(
    {
        [UniProfileActions.STATS_REQUESTED]: userRequested,
        [UniProfileActions.STATS_RECEIVED]: userReceived,
        [UniProfileActions.POSITION_REQUESTED]: positionRequested,
        [UniProfileActions.POSITION_RECEIVED]: positionReceived,
        [UniProfileActions.SCORE_REQUESTED]: testsRequested,
        [UniProfileActions.SCORE_RECEIVED]: testsReceived,
        [UniProfileActions.GRAD_REQUESTED]: averageRequested,
        [UniProfileActions.GRAD_RECEIVED]: averageReceived,
        [UniProfileActions.UPDATE_GRAPH]: updateGraph
    },
    initialState
)

export default reducer