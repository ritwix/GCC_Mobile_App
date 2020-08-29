
export interface News {
    article: Article,
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

export interface Article extends Headline {
    body: string
    prettyPrintedTime: string
}

export enum Region {
    UK = 'UK',
    AMER = 'AMER',
    INDIA = 'INDIA',
    POLAND = 'POLAND',
    SWIS = 'SWIS',
    APAC = 'APAC',
    GLOBAL = 'GLOBAL'
}