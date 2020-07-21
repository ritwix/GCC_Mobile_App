import { User, Xy, PositionProgress, BubbleData, TestResults } from "./types"
import { Region, getUrl } from "../../../utilities/urls"
import { Score } from "../individualleaderboard"
import MockAdapter from "axios-mock-adapter/types";
import { LineSerieData } from "@nivo/line";
import { BumpInputSerie } from "@nivo/bump";

const scores: Score[] = [
    {
        questionNumber: 1,
        correct: 75,
        incorrect: 20,
        timedOut: 5,
        score: 67.43
    },
    {
        questionNumber: 2,
        correct: 55,
        incorrect: 40,
        timedOut: 5,
        score: 23.34
    },
    {
        questionNumber: 3,
        correct: 90,
        incorrect: 0,
        timedOut: 10,
        score: 87.43
    },
    {
        questionNumber: 4,
        correct: 12,
        incorrect: 20,
        timedOut: 68,
        score: 4.72
    },
    {
        questionNumber: 5,
        correct: 35,
        incorrect: 35,
        timedOut: 30,
        score: 27.13
    },
    {
        questionNumber: 6,
        correct: 95,
        incorrect: 5,
        timedOut: 0,
        score: 92.19
    }
]

const user: User = {
    id: '123456',
    gitAvatar: 'https://avatars1.githubusercontent.com/u/15133076?s=460&v=4',
    name: 'Kunal Wagle',
    position: 34,
    positionWithinTeam: 6,
    region: Region.UK,
    team: 'Imperial College London',
    teamPosition: 3,
    scores,
    total: 302.24,
    teamLogo: 'https://www.doc.ic.ac.uk/~afd/homepages/images/logo_imperial_college_london.png'
}

const positionGraphData: LineSerieData = {
    id: "Position",
    data: [
        {
            x: '09-10-2019',
            y: 7
        },
        {
            x: '10-10-2019',
            y: 23
        },
        {
            x: '11-10-2019',
            y: 2
        },
        {
            x: '12-10-2019',
            y: 11
        },
        {
            x: '13-10-2019',
            y: 3
        },
        {
            x: '14-10-2019',
            y: 1
        }
    ]
}

const averageData: LineSerieData[] = [
    {
        id: "University Position",
        data: [
            {
                x: '09-10-2019',
                y: 27
            },
            {
                x: '10-10-2019',
                y: 23
            },
            {
                x: '11-10-2019',
                y: 2
            },
            {
                x: '12-10-2019',
                y: 11
            },
            {
                x: '13-10-2019',
                y: 3
            },
            {
                x: '14-10-2019',
                y: 1
            }
        ]
    },
    {
        id: "Position within University",
        data: [
            {
                x: '09-10-2019',
                y: 19
            },
            {
                x: '10-10-2019',
                y: 14
            },
            {
                x: '11-10-2019',
                y: 7
            },
            {
                x: '12-10-2019',
                y: 21
            },
            {
                x: '13-10-2019',
                y: 2
            },
            {
                x: '14-10-2019',
                y: 1
            }
        ]
    }
]

const averageGraph: PositionProgress = {
    data: averageData,
    max: 1,
    min: 27
}

const positionGraph: PositionProgress = {
    data: [positionGraphData],
    max: 1,
    min: 23
}

const bubbleRoot: BubbleData = {
    name: "Test Results",
    color: "hsl(105, 70%, 50%)",
    children: [
        {
            name: "Question 1",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Correct",
                    color: "hsl(236, 70%, 50%)",
                    value: 75
                },
                {
                    name: "Incorrect",
                    color: "hsl(322, 70%, 50%)",
                    value: 20
                },
                {
                    name: "Timed Out",
                    color: "hsl(47, 70%, 50%)",
                    value: 5
                }
            ]
        },
        {
            name: "Question 2",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Correct",
                    color: "hsl(236, 70%, 50%)",
                    value: 55
                },
                {
                    name: "Incorrect",
                    color: "hsl(322, 70%, 50%)",
                    value: 40
                },
                {
                    name: "Timed Out",
                    color: "hsl(47, 70%, 50%)",
                    value: 5
                }
            ]
        },
        {
            name: "Question 3",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Correct",
                    color: "hsl(236, 70%, 50%)",
                    value: 90
                },
                {
                    name: "Incorrect",
                    color: "hsl(322, 70%, 50%)",
                    value: 0
                },
                {
                    name: "Timed Out",
                    color: "hsl(47, 70%, 50%)",
                    value: 10
                }
            ]
        },
        {
            name: "Question 4",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Correct",
                    color: "hsl(236, 70%, 50%)",
                    value: 12
                },
                {
                    name: "Incorrect",
                    color: "hsl(322, 70%, 50%)",
                    value: 20
                },
                {
                    name: "Timed Out",
                    color: "hsl(47, 70%, 50%)",
                    value: 68
                }
            ]
        },
        {
            name: "Question 5",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Correct",
                    color: "hsl(236, 70%, 50%)",
                    value: 35
                },
                {
                    name: "Incorrect",
                    color: "hsl(322, 70%, 50%)",
                    value: 35
                },
                {
                    name: "Timed Out",
                    color: "hsl(47, 70%, 50%)",
                    value: 30
                }
            ]
        },
        {
            name: "Question 6",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Correct",
                    color: "hsl(236, 70%, 50%)",
                    value: 95
                },
                {
                    name: "Incorrect",
                    color: "hsl(322, 70%, 50%)",
                    value: 5
                },
                {
                    name: "Timed Out",
                    color: "hsl(47, 70%, 50%)",
                    value: 0
                }
            ]
        }
    ]
}

const bubbleData: TestResults = {
    data: bubbleRoot
}

export const configureMock = (mock: MockAdapter) => {
    mock
        .onGet(`${getUrl(Region.UK)}contestant/stats/123456`)
        .reply(200, user)
        .onGet(`${getUrl(Region.UK)}graphs/pos/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.UK)}graphs/avg/123456`)
        .reply(200, averageGraph)
        .onGet(`${getUrl(Region.UK)}graphs/tests/123456`)
        .reply(200, bubbleData)
        .onGet(`${getUrl(Region.AMER)}contestant/stats/123456`)
        .reply(200, user)
        .onGet(`${getUrl(Region.AMER)}graphs/pos/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.AMER)}graphs/avg/123456`)
        .reply(200, averageGraph)
        .onGet(`${getUrl(Region.AMER)}graphs/tests/123456`)
        .reply(200, bubbleData)
        .onGet(`${getUrl(Region.INDIA)}contestant/stats/123456`)
        .reply(200, user)
        .onGet(`${getUrl(Region.INDIA)}graphs/pos/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.INDIA)}graphs/avg/123456`)
        .reply(200, averageGraph)
        .onGet(`${getUrl(Region.INDIA)}graphs/tests/123456`)
        .reply(200, bubbleData)
        .onGet(`${getUrl(Region.SWIS)}contestant/stats/123456`)
        .reply(200, user)
        .onGet(`${getUrl(Region.SWIS)}graphs/pos/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.SWIS)}graphs/avg/123456`)
        .reply(200, averageGraph)
        .onGet(`${getUrl(Region.SWIS)}graphs/tests/123456`)
        .reply(200, bubbleData)
        .onGet(`${getUrl(Region.POLAND)}contestant/stats/123456`)
        .reply(200, user)
        .onGet(`${getUrl(Region.POLAND)}graphs/pos/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.POLAND)}graphs/avg/123456`)
        .reply(200, averageGraph)
        .onGet(`${getUrl(Region.POLAND)}graphs/tests/123456`)
        .reply(200, bubbleData)
        .onGet(`${getUrl(Region.GLOBAL)}contestant/stats/123456`)
        .reply(200, user)
        .onGet(`${getUrl(Region.GLOBAL)}graphs/pos/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.GLOBAL)}graphs/avg/123456`)
        .reply(200, averageGraph)
        .onGet(`${getUrl(Region.GLOBAL)}graphs/tests/123456`)
        .reply(200, bubbleData)
}