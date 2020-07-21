import axios from 'axios'
import { UniversityLeaderboard } from './types'
import { getUrl, Region } from 'src/utilities/urls'

export const getLeaderboard = (region: Region, from: number, limit: number) => axios.get<UniversityLeaderboard>(`${getUrl(region)}teamleaderboard?from=${from}&limit=${limit}`)