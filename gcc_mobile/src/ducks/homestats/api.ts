import axios from 'axios'
import { Facts } from './types'
import { getUrl, Region } from '../../../utilities/urls'

export const getFacts = (region: string) => 
    axios.get<Facts>(`${getUrl(region)}facts/quick`)