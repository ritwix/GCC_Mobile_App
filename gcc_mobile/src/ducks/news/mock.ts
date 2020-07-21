import { News, Headline } from './types'
import MockAdapter from 'axios-mock-adapter'
import { getUrl, Region } from '../../../utilities/urls'

const body = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est lectus, rutrum eleifend venenatis ut, lobortis id dui. Aliquam nec dolor a magna lobortis accumsan sed id ante. Sed porttitor elit finibus magna convallis, quis pellentesque est varius. Quisque id est nisl. Ut finibus massa non enim fringilla egestas. Nullam magna erat, porta in nulla et, semper dignissim tellus. Quisque ac iaculis quam, at tempus est. Praesent nunc augue, faucibus non hendrerit quis, pellentesque eu neque. Vivamus finibus at purus dapibus hendrerit. Vivamus convallis erat neque, ac imperdiet arcu dapibus at. Aenean sit amet vestibulum tortor. Vestibulum tempor porttitor diam aliquet vestibulum. Donec in arcu auctor, tristique nulla nec, fermentum nibh. Vestibulum nec sapien eget felis lobortis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget efficitur nunc.</p><p>Aenean ligula ex, lacinia in varius et, faucibus id erat. Etiam condimentum condimentum nibh, eu pharetra odio blandit non. Integer vehicula, nibh sodales sollicitudin dictum, dui urna pellentesque neque, vitae tempor purus purus quis nunc. Donec vel dapibus risus, a sodales sapien. Aliquam eget tellus eu felis posuere ultricies. Aliquam molestie augue quis risus fringilla malesuada quis quis risus. Sed id magna eu dolor suscipit aliquet eu a elit.</p><p>Fusce imperdiet nunc ut massa malesuada consectetur. Donec molestie diam augue, in hendrerit enim sagittis vitae. Ut scelerisque massa at nisi tempus, id facilisis dui venenatis. Sed placerat ac turpis vel facilisis. Pellentesque suscipit sodales scelerisque. Aliquam aliquet dapibus dui, in ornare purus lacinia vitae. Integer id felis blandit, fermentum metus sed, fringilla elit.</p><p>Pellentesque dignissim, mauris ac vulputate vestibulum, tellus diam dictum diam, ut accumsan lacus enim ut felis. Mauris cursus mattis porta. Aliquam ultricies lacinia leo vitae dignissim. Nunc ut ornare nulla, eu imperdiet enim. Phasellus accumsan vel purus quis accumsan. Quisque faucibus at lectus in suscipit. Sed a fermentum purus, ut molestie libero. In lobortis tellus quis dui fermentum, vitae viverra lectus eleifend. Morbi lacinia at orci sed pharetra. Integer accumsan purus vel erat dapibus malesuada. In quis aliquam leo. Etiam posuere pellentesque ante, ut facilisis nunc varius posuere. In hac habitasse platea dictumst. Duis lobortis nisi in felis ultrices, eu feugiat justo aliquam.</p><p>Proin facilisis, nisi vitae aliquet pretium, ex risus congue metus, vel posuere nunc est non metus. Donec ultrices interdum cursus. Morbi sodales a neque at laoreet. Integer in dui vitae turpis aliquet tincidunt ac eu erat. Mauris sapien dui, varius viverra tempus eu, interdum non risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dignissim leo eget odio pellentesque ultrices. Integer ac odio egestas, aliquam enim sit amet, ullamcorper mauris. Ut posuere lectus magna, eu lacinia tortor euismod ut. Ut maximus elit eu tempor rutrum.</p>"

const blurb = "<p>Cras pulvinar blandit pretium. Etiam feugiat ante sed nulla varius, non euismod eros rhoncus. Fusce at molestie nunc, quis commodo erat. Nam elit libero, aliquet nec vestibulum suscipit, facilisis vel nisi. Fusce risus justo, tempus et interdum id, tempus et dolor. Donec vitae urna eget metus ultricies fringilla. Quisque malesuada tortor ac justo consequat, ac pharetra ex cursus.</p>"

export const news: News[] = [
    {
        id: "123456",
        title: "UCL dominates first week",
        body,
        blurb,
        imageUrl: "/brandnet/image1.jpg",
        author: "Kunal Wagle",
        timestamp: "26 minutes ago"
    },
    {
        id: "234567",
        title: "LSE student dominates early competition",
        body,
        blurb,
        imageUrl: "/brandnet/image3.jpg",
        author: "Kunal Wagle",
        timestamp: "26 minutes ago"
    },
    {
        id: "345678",
        title: "Code your way to the new iPhone XS",
        body,
        blurb,
        imageUrl: "/brandnet/image3.jpg",
        author: "Kunal Wagle",
        timestamp: "26 minutes ago"
    },
    {
        id: "456789",
        title: "Four-way race to the top",
        body,
        blurb,
        imageUrl: "/brandnet/image4.jpg",
        author: "Kunal Wagle",
        timestamp: "26 minutes ago"
    },
    {
        id: "567890",
        title: "It's all one university's to lose",
        body,
        blurb,
        imageUrl: "/brandnet/image5.jpg",
        author: "Kunal Wagle",
        timestamp: "26 minutes ago"
    }
]

const headline = (news: News) => {
    return {
        id: news.id,
        imageUrl: news.imageUrl,
        blurb: news.blurb,
        title: news.title,
        author: news.author,
        timestamp: news.timestamp
    } as Headline
}

const generateHeadlines = (numberOfHeadlines: number) => {
    const headlines: Headline[] = []
    for (let i=0; i<numberOfHeadlines; i++) {
        const newsArticle = news[Math.floor(Math.random() * Math.floor(5))]
        headlines.push(headline(newsArticle))
    }
    return headlines
}

export const configureMock = (mock: MockAdapter) => {
    mock
        .onGet(`${getUrl(Region.UK)}news/headlines?from=0&limit=10`)
        .reply(200, {
            total: 8,
            headlines: generateHeadlines(8)               
        })
        .onGet(`${getUrl(Region.POLAND)}news/headlines?from=0&limit=10`)
        .reply(200, {
            total: 5,
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.INDIA)}news/headlines?from=0&limit=10`)
        .reply(200, {
            total: 9,
            headlines: generateHeadlines(9)               
        })
        .onGet(`${getUrl(Region.SWIS)}news/headlines?from=0&limit=10`)
        .reply(200, {
            total: 14,
            headlines: generateHeadlines(10)               
        })
        .onGet(`${getUrl(Region.SWIS)}news/headlines?from=10&limit=10`)
        .reply(200, {
            total: 14,
            headlines: generateHeadlines(4)               
        })
        .onGet(`${getUrl(Region.GLOBAL)}news/headlines?from=0&limit=10`)
        .reply(200, {
            total: 10,
            headlines: generateHeadlines(10)               
        })
        .onGet(`${getUrl(Region.AMER)}news/headlines?from=0&limit=10`)
        .reply(200, {
            total: 6,
            headlines: generateHeadlines(6)               
        })
        .onGet(`${getUrl(Region.UK)}news/123456`)
        .reply(200, {
            news: news[0],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.UK)}news/234567`)
        .reply(200, {
            news: news[1],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.UK)}news/345678`)
        .reply(200, {
            news: news[2],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.UK)}news/456789`)
        .reply(200, {
            news: news[3],
            headlines: generateHeadlines(5)              
        })
        .onGet(`${getUrl(Region.UK)}news/567890`)
        .reply(200, {
            news: news[4],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.POLAND)}news/123456`)
        .reply(200, {
            news: news[0],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.POLAND)}news/234567`)
        .reply(200, {
            news: news[1],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.POLAND)}news/345678`)
        .reply(200, {
            news: news[2],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.POLAND)}news/456789`)
        .reply(200, {
            news: news[3],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.POLAND)}news/567890`)
        .reply(200, {
            news: news[4],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.SWIS)}news/123456`)
        .reply(200, {
            news: news[0],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.SWIS)}news/234567`)
        .reply(200, {
            news: news[1],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.SWIS)}news/345678`)
        .reply(200, {
            news: news[2],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.SWIS)}news/456789`)
        .reply(200, {
            news: news[3],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.SWIS)}news/567890`)
        .reply(200, {
            news: news[4],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.INDIA)}news/123456`)
        .reply(200, {
            news: news[0],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.INDIA)}news/234567`)
        .reply(200, {
            news: news[1],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.INDIA)}news/345678`)
        .reply(200, {
            news: news[2],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.INDIA)}news/456789`)
        .reply(200, {
            news: news[3],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.INDIA)}news/567890`)
        .reply(200, {
            news: news[4],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.AMER)}news/123456`)
        .reply(200, {
            news: news[0],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.AMER)}news/234567`)
        .reply(200, {
            news: news[1],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.AMER)}news/345678`)
        .reply(200, {
            news: news[2],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.AMER)}news/456789`)
        .reply(200, {
            news: news[3],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.AMER)}news/567890`)
        .reply(200, {
            news: news[4],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.GLOBAL)}news/123456`)
        .reply(200, {
            news: news[0],
            headlines: generateHeadlines(5)              
        })
        .onGet(`${getUrl(Region.GLOBAL)}news/234567`)
        .reply(200, {
            news: news[1],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.GLOBAL)}news/345678`)
        .reply(200, {
            news: news[2],
            headlines: generateHeadlines(5)               
        })
        .onGet(`${getUrl(Region.GLOBAL)}news/456789`)
        .reply(200, {
            news: news[3],
            headlines: generateHeadlines(5)              
        })
        .onGet(`${getUrl(Region.GLOBAL)}news/567890`)
        .reply(200, {
            news: news[4],
            headlines: generateHeadlines(5)               
        })
        .onAny()
        .passThrough()

}