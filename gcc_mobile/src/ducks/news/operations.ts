import { Dispatch } from 'redux'
import { newsRequested, newsReceived, headlinesReceived, headlinesRequested, nextReceived } from './actions'
import { getArticle, getHeadlines } from './api'
import { Region } from '../../../utilities/urls'
import { AppState } from '../../types';

const requestNews = (region: Region, id: string) => (dispatch: Dispatch) => {
    console.log(`Getting news for region ${region}`)
    dispatch(newsRequested(id))
    getArticle(region, id)
        .then(
            (x: any) => 
                dispatch(newsReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(newsReceived(x))
        )
}

const requestHeadlines = (region: Region) => (dispatch: Dispatch) => {
    console.log(`Getting headlines for region ${region}`)
    dispatch(headlinesRequested(region))
    getHeadlines(region, 0, 10)
        .then(
            (x: any) => 
                dispatch(headlinesReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(headlinesReceived(x))
        )
}

const loadNext = () => (dispatch: Dispatch, getState: () => AppState) => {
    const region = getState().user.navBarRegion
    console.log(`Getting headlines for region ${region}`)
    dispatch(headlinesRequested(region))
    const from = getState().news.maxShown

    getHeadlines(region, from, 10)
        .then(
            (x: any) => 
                dispatch(nextReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(nextReceived(x))
        )
}


export default {
    requestHeadlines, requestNews, loadNext
}