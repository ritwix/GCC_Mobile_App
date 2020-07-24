import { createAction } from 'redux-actions'
import { Field } from './types'
import { Region } from '../../../utilities/urls'
import { create } from 'domain';

export namespace HelpActions {
    export const REQUESTED = 'HELP/REQUESTED'
    export const CHANGE = 'HELP/CHANGE'
    export const RECEIVED = 'HELP/RECEIVED'
}

export const helpRequested = createAction(HelpActions.REQUESTED)
export const helpChanged = createAction<Field>(HelpActions.CHANGE)
export const helpReceived = createAction<string>(HelpActions.RECEIVED)