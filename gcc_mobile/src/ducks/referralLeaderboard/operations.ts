import {Dispatch} from 'redux'
import {leaderboardRequested, reloadReceived, nextReceived, leaderboardSearch} from './actions'
import {getLeaderboard} from './api'
import { AppState } from '../../types';

const request = () => (dispatch: Dispatch) => {
    dispatch(leaderboardRequested())
    getLeaderboard(0, 20)
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
    dispatch(leaderboardRequested())
    const from = getState().referralLeaderboard.maxShown

    getLeaderboard(from, 20)
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