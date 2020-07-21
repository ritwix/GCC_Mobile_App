import axios from 'axios'
import { University, PositionProgress, GradGraph, ScoreGraph } from './types'
import { getUrl, Region } from '../../../utilities/urls'

export const getUni = (region: Region, id: string) => axios.get<University>(`${getUrl(region)}team/stats/${id}`)
export const getPositionGraph = (region: Region, id: string) => axios.get<PositionProgress>(`${getUrl(region)}graphs/posuni/${id}`)
export const getScoreGraph = (region: Region, id: string) => axios.get<ScoreGraph>(`${getUrl(region)}graphs/bubbleuni/${id}`)
export const getGradGraph = (region: Region, id: string) => axios.get<GradGraph>(`${getUrl(region)}graphs/bar/${id}`)