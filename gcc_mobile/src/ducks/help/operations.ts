import { Dispatch } from 'redux'
import { helpChanged, helpReceived, helpRequested } from './actions'
import { postHelp } from './api'
import { AppState } from '../../types'
import { Query, HelpForm } from './types'

const request = () => (dispatch: Dispatch, getState: () => AppState) => {
    dispatch(helpRequested())
    const state = getState()
    const form = state.help.form
    const query: Query = {
        name: form.name,
        email: form.email,
        query: form.query,
        contestantId: state.user.contestantId
    }
    postHelp(query)
        .then(
            (x: any) => 
                dispatch(helpReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(helpReceived(x))
        )
}

const changeHelp = (key: keyof HelpForm, value: string) => (dispatch: Dispatch) => {
    dispatch(helpChanged({key, value}))
}

export default {
    request, changeHelp
}