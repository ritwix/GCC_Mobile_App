import axios from 'axios'
import { News, Headlines, Article } from './types'
import { getUrl, Region } from '../../../utilities/urls'

export const getArticle = (region: Region, id: string) => axios.get<Article>(`${getUrl(region)}news/${id}`)
export const getHeadlines = (region: Region, from: number, limit: number) => axios.get<Headlines>(`${getUrl(region)}news/headlines?from=${from}&limit=${limit}`)
