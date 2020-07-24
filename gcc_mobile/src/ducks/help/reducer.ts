import {HelpState} from './types'
import {Action, handleActions} from 'redux-actions'
import { HelpActions } from './actions'

export const initialState: HelpState = {
    loading: false,
    form: {
        name: '',
        email: '',
        query: ''
    }
}

const changeHelp = (state: HelpState, action: Action<any>): HelpState => {
    return {
        ...state,
        form: {
            ...state.form,
            [action.payload.key]: action.payload.value
        }
    }
}

const request = (state: HelpState): HelpState => {
    return {
        ...state,
        loading: true,
        details: undefined
    }
}

const receive = (state: HelpState, action: Action<any>): HelpState => {
    if (action.payload === "SUBMITTED") {
        return {
            ...state,
            loading: false,
            form: initialState.form,
            details: action.payload
        }
    }
    return {
        ...state,
        loading: false,
        details: action.payload
    }
}


const reducer = handleActions(
    {
        [HelpActions.CHANGE]: changeHelp,
        [HelpActions.REQUESTED]: request,
        [HelpActions.RECEIVED]: receive
        
    },
    initialState
)

export default reducer