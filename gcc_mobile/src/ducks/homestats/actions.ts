import { createAction } from 'redux-actions'
import { Facts } from './types'
import { Region } from '../../../utilities/urls'

export namespace HomeActions {
    export const REQUESTED = 'HOME/REQUESTED'
    export const RECEIVED = 'HOME/RECEIVED'
}

export const homeRequested = createAction(HomeActions.REQUESTED)
export const homeReceived = createAction<Facts>(HomeActions.RECEIVED)
