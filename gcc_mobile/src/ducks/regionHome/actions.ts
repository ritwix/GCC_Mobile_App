import { createAction } from 'redux-actions'
import { RegionFacts } from './types'
import { Region } from '../../../utilities/urls'

export namespace RegionActions {
    export const REQUESTED = 'REGION/REQUESTED'
    export const RECEIVED = 'REGION/RECEIVED'
    export const RESET = 'REGION/RESET'
}

export const regionRequested = createAction<Region>(RegionActions.REQUESTED)
export const regionReceived = createAction<RegionFacts>(RegionActions.RECEIVED)
export const regionReset = createAction(RegionActions.RESET)