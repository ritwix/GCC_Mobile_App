import { NewsState, Headlines } from './types'
import {Action, handleActions} from 'redux-actions'
import _ from "lodash"
import { NewsActions } from './actions'

export const initialState: NewsState = {
    fetchedHeadlines: false,
    fetchedNews: false,
    headlines: {
        loading: false
    },
    currentArticle: {
        loading: false
    },
    maxShown: 0,
    articleId: ""
}

const newsRequested = (state: NewsState, action: Action<any>): NewsState => {
    return {
        ...state,
        fetchedNews: true,
        currentArticle: {
            ...state.currentArticle,
            loading: true
        },
        articleId: action.payload
    }
}

const newsReceived = (state: NewsState, action: Action<any>): NewsState => {
    return {
        ...state,
        fetchedNews: true,
        currentArticle: {
            ...state.currentArticle,
            loading: false,
            details: action.payload
        },
        articleId: action.payload.news.id
    }
}

const headlinesRequested = (state: NewsState): NewsState => {
    return {
        ...state,
        fetchedHeadlines: true,
        headlines: {
            ...state.headlines,
            loading: true
        }
    }
}

const headlinesReceived = (state: NewsState, action: Action<any>): NewsState => {
    return {
        ...state,
        fetchedHeadlines: true,
        headlines: {
            ...state.headlines,
            loading: false,
            details: {
                headlines: action.payload,
                total: 0
            }
        },
        maxShown: 10
    }
}

const nextReceived = (state: NewsState, action: Action<any>): NewsState => {
    console.log("Completed a next run - maxShown is " + state.maxShown)
    const details = state.headlines.details as Headlines
    const detailsClone = {
        ...details
    }
    const headlines = detailsClone.headlines
    return {
        ...state,
        fetchedHeadlines: true,
        headlines: {
            ...state.headlines,
            details: {
                ...details,
                headlines: headlines.concat(action.payload.headlines)
                
            },
            loading: false
        } as any,
        maxShown: state.maxShown + 10
    }
}

const newsReset = (state: NewsState): NewsState => {
    return {
        ...state,
        fetchedNews: false,
        fetchedHeadlines: false
    }
}

const reducer = handleActions(
    {
        [NewsActions.REQUESTED]: newsRequested,
        [NewsActions.RECEIVED]: newsReceived,
        [NewsActions.HEADLINES_REQUESTED]: headlinesRequested,
        [NewsActions.HEADLINES_RECEIVED]: headlinesReceived,
        [NewsActions.NEXT]: nextReceived,
        [NewsActions.RESET]: newsReset
    },
    initialState
)

export default reducer