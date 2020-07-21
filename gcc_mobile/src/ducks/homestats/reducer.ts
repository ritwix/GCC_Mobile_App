import {HomeState} from './types'
import {Action, handleActions} from 'redux-actions'
import { HomeActions } from './actions'
import { Region, getShortNameForServerName } from '../../../utilities/urls'

export const initialState: HomeState = {
    uk: {loading: false},
    in: {loading: false},
    gl: {loading: false},
    pl: {loading: false},
    ap: {loading: false},
    us: {loading: false},
    ch: {loading: false},
    fetched: false
}

const homeRequested = (state: HomeState, action: Action<any>): HomeState => {
    return {
        ...state,
        [action.payload]: {
            ...state[action.payload],
            loading: true
        },
        fetched: true
    }
}

const homeReceived = (state: HomeState, action: Action<any>): HomeState => {
    return {
        ...state,
        [getShortNameForServerName(action.payload.region)]: {
            ...state[getShortNameForServerName(action.payload.region)],
            loading: false,
            details: action.payload
        },
        fetched: true
    }
}

const reducer = handleActions(
    {
        [HomeActions.REQUESTED]: homeRequested,
        [HomeActions.RECEIVED]: homeReceived
        
    },
    initialState
)

export default reducer