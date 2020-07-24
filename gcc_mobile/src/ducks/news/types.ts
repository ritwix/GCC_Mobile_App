import { RemoteResource } from '../../../utilities'
import { Contestant } from '../individualleaderboard'
import { University } from '../universityLeaderboard'

export interface NewsState {
    currentArticle: RemoteResource<Article>
    articleId: string
    maxShown: number
    headlines: RemoteResource<Headlines>
    fetchedNews: boolean
    fetchedHeadlines: boolean
}

export interface Article {
    news: News,
    headlines: Headline[]
}

export interface Headlines {
    total: number
    headlines: Headline[]
}

export interface Headline {
    id: string
    title: string
    imageUrl: string
    blurb: string
    author: string
    timestamp: string
}

export interface News extends Headline {
    body: string
    prettyPrintedTime: string
}