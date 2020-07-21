import axios from 'axios'
import { User, PositionProgress, TestResults } from './types'
import { getUrl, Region } from '../../../utilities/urls'

export const getUser = (region: Region, id: string) => axios.get<User>(`${getUrl(region)}contestant/stats/${id}`)
export const getPositionGraph = (region: Region, id: string) => axios.get<PositionProgress>(`${getUrl(region)}graphs/posind/${id}`)
export const getAverageGraph = (region: Region, id: string) => axios.get<PositionProgress>(`${getUrl(region)}graphs/posavg/${id}`)
export const getTestGraph = (region: Region, id: string) => axios.get<TestResults>(`${getUrl(region)}graphs/bubbleind/${id}`)