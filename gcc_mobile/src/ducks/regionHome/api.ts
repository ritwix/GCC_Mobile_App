import axios from 'axios'
import { RegionFacts } from './types'
import { getUrl, Region } from '../../../utilities/urls'

export const getRegion = (region: Region) => axios.get<RegionFacts>(`${getUrl(region)}facts/region`)