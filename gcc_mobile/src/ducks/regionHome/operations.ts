import { Dispatch } from 'redux'
import { regionRequested, regionReceived } from './actions'
import { getRegion } from './api'
import { Region } from '../../../utilities/urls'

const request = (region: Region) => (dispatch: Dispatch) => {
    console.log(`Getting leaderboard for region ${region}`)
    dispatch(regionRequested(region))
    getRegion(region)
        .then(
            (x: any) => 
                dispatch(regionReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(regionReceived(x))
        )
}


export default {
    request
}