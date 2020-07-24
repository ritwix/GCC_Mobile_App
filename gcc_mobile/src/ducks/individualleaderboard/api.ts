import axios from 'axios'
import { Leaderboard } from './types'
import { getUrl, Region } from 'src/utilities/urls'

export const getLeaderboard = (region: Region, from: number, limit: number) => axios.get<Leaderboard>(`${getUrl(region)}leaderboard?from=${from}&limit=${limit}`)