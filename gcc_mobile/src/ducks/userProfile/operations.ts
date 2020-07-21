import { Dispatch } from 'redux'
import { statsRequested, statsReceived, positionRequested, positionReceived, averageRequested, averageReceived, resultsRequested, resultsReceived } from './actions'
import { getUser, getPositionGraph, getAverageGraph, getTestGraph } from './api'
import { Region } from '../../../utilities/urls'

const requestUser = (region: Region, id: string) => (dispatch: Dispatch) => {
    dispatch(statsRequested(id))
    getUser(region, id)
        .then(
            (x: any) => 
                dispatch(statsReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(statsReceived(x))
        )
}

const requestPosition = (region: Region, id: string) => (dispatch: Dispatch) => {
    dispatch(positionRequested(id))
    getPositionGraph(region, id)
        .then(
            (x: any) => 
                dispatch(positionReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(positionReceived(x))
        )
}

const requestAverage = (region: Region, id: string) => (dispatch: Dispatch) => {
    dispatch(averageRequested(id))
    getAverageGraph(region, id)
        .then(
            (x: any) => 
                dispatch(averageReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(averageReceived(x))
        )
}

const requestTests = (region: Region, id: string) => (dispatch: Dispatch) => {
    dispatch(resultsRequested(id))
    getTestGraph(region, id)
        .then(
            (x: any) => 
                dispatch(resultsReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(resultsReceived(x))
        )
}

export default {
    requestUser, requestPosition, requestAverage, requestTests
}