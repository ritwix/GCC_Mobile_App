import axios from 'axios'
import { ReferralLeaderboard } from './types'
import { getUrl, Region } from 'src/utilities/urls'

export const getLeaderboard = (from: number, limit: number) => axios.get<ReferralLeaderboard>(`${getUrl(Region.GLOBAL)}referralLeaderboard?from=${from}&limit=${limit}`)