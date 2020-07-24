import axios from 'axios'
import { Query } from './types'
import { getUrl, Region } from '../../../utilities/urls'

export const postHelp = (query: Query) => axios.post<string>(`${getUrl(Region.GLOBAL)}supportquery`, query)