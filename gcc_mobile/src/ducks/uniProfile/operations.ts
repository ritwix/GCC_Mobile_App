import { Dispatch } from 'redux'
import { statsRequested, statsReceived, positionRequested, positionReceived, scoreRequested, scoreReceived, gradRequested, gradReceived } from './actions'
import { getUni, getPositionGraph, getGradGraph, getScoreGraph } from './api'
import { Region } from '../../../utilities/urls'

const requestUser = (region: Region, id: string) => (dispatch: Dispatch) => {
    dispatch(statsRequested(id))
    getUni(region, id)
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

const requestScore = (region: Region, id: string) => (dispatch: Dispatch) => {
    dispatch(scoreRequested(id))
    getScoreGraph(region, id)
        .then(
            (x: any) => 
                dispatch(scoreReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(scoreReceived(x))
        )
}

const requestGrad = (region: Region, id: string) => (dispatch: Dispatch) => {
    dispatch(gradRequested(id))
    getGradGraph(region, id)
        .then(
            (x: any) => 
                dispatch(gradReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(gradReceived(x))
        )
}

export default {
    requestUser, requestPosition, requestGrad, requestScore
}