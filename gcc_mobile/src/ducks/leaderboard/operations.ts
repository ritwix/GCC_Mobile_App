import { leaderboardChanged, regionChanged } from './actions'
import { LeaderboardType } from './types'
import { Region } from '../../../utilities/urls'

const changeLeaderboard = (leaderboardType: LeaderboardType) => leaderboardChanged(leaderboardType)
const changeRegion = (region: Region) => regionChanged(region)

export default {
    changeLeaderboard,
    changeRegion
}