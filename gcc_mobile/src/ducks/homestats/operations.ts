import { homeRequested, homeReceived } from './actions'
import { Region } from '../../../utilities/urls'
import { Dispatch } from 'redux'
import { getFacts } from './api';

const request = () => (dispatch: Dispatch) => {
    const regions = ["uk", "us", "ch", "in", "pl", "gl"]
    for (let i=0; i<regions.length; i++) {
        dispatch(homeRequested(regions[i]))
        getFacts(regions[i])
        .then(
            (x: any) => 
                dispatch(homeReceived(x.data))
        )
        .catch(
            (x: any) => 
                dispatch(homeReceived(x))
        )
    }
}

export default {
    request
}