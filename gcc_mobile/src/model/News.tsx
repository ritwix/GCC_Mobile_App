
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
    paragraphs: string[]
    prettyPrintedTime: string
}
// TODO: Add correct region keys @im-pratham
export enum Region {
    UK = 'UK',
    AMC = 'AMC',
    INDIA = 'INDIA',
    EUROPE = 'EUROPE',
    SEA = 'SEA',
    SWIS = 'SWIS',
    ROW = 'ROW',
    GLOBAL = 'GLOBAL'
}