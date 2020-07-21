import { RegionState } from './types'
import {Action, handleActions} from 'redux-actions'
import _ from "lodash"
import { RegionActions } from './actions'
import { MozImageRegionProperty } from 'csstype';

export const initialState: RegionState = {
    loading: false,
    fetched: false
}

const regionRequested = (state: RegionState): RegionState => {
    return {
        ...state,
        loading: true,
        fetched: true
    }
}

const regionReceived = (state: RegionState, action: Action<any>): RegionState => {
    return {
        ...state,
        loading: false,
        details: action.payload,
        fetched: true
    }
}

const regionReset = (state: RegionState): RegionState => {
    return {
        ...state,
        fetched: false
    }
}

const reducer = handleActions(
    {
        [RegionActions.REQUESTED]: regionRequested,
        [RegionActions.RECEIVED]: regionReceived,
        [RegionActions.RESET]: regionReset
    },
    initialState
)

export default reducer