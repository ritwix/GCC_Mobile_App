import { createAction } from 'redux-actions'
import { Headlines, News, Article } from './types'
import { Region } from '../../../utilities/urls'

export namespace NewsActions {
    export const REQUESTED = 'NEWS/REQUESTED'
    export const RECEIVED = 'NEWS/RECEIVED'
    export const HEADLINES_REQUESTED = 'NEWS/HEADLINES_REQUESTED'
    export const HEADLINES_RECEIVED = 'NEWS/HEADLINES_RECEIVED'
    export const NEXT = 'NEWS/NEXT'
    export const RESET = 'NEWS/RESET'
}

export const newsRequested = createAction<string>(NewsActions.REQUESTED)
export const newsReceived = createAction<Article>(NewsActions.RECEIVED)
export const headlinesRequested = createAction<Region>(NewsActions.HEADLINES_REQUESTED)
export const headlinesReceived = createAction<Headlines>(NewsActions.HEADLINES_RECEIVED)
export const nextReceived = createAction<Headlines>(NewsActions.NEXT)
export const newsReset = createAction(NewsActions.RESET)