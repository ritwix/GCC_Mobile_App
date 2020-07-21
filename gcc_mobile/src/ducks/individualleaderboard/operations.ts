import { Dispatch } from 'redux'
import { leaderboardRequested, reloadReceived, nextReceived, leaderboardSearch } from './actions'
import { getLeaderboard } from './api'
import { Region } from 'src/utilities/urls'
import { AppState } from '../../types'

const request = (region: Region) => (dispatch: Dispatch, getState: () => AppState) => {
    console.log(`Getting leaderboard for region ${region}`)
    dispatch(leaderboardRequested(region))
    getLeaderboard(region, 0, 20)
        .then(
            (x: any) => 
                dispatch(reloadReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(reloadReceived(x))
        )
}

const loadNext = () => (dispatch: Dispatch, getState: () => AppState) => {
    const region = getState().user.navBarRegion
    console.log(`Getting leaderboard for region ${region}`)
    dispatch(leaderboardRequested(region))
    const from = getState().leaderboard.maxShown

    getLeaderboard(region, from, 20)
        .then(
            (x: any) => 
                dispatch(nextReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(nextReceived(x))
        )
}

const search = (value: string) => (dispatch: Dispatch) => {
    dispatch(leaderboardSearch(value))
}

export default {
    request, search, loadNext
}