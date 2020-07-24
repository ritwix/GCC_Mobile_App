import { PositionProgress, BubbleData, GradGraph, University, ScoreGraph } from "./types"
import { Region, getUrl } from "../../../utilities/urls"
import { Score, Contestant } from "../individualleaderboard"
import MockAdapter from "axios-mock-adapter/types";
import { LineSerieData } from "@nivo/line";
import { BumpInputSerie } from "@nivo/bump";
import { contestants } from "../individualleaderboard/mock"

const uni: University = {
    id: '123456',
    name: 'Imperial College London',
    position: 1,
    region: Region.UK,
    totalContestants: 8,
    total: 1269.93,
    contestants: contestants(0, 8),
    logo: 'https://www.doc.ic.ac.uk/~afd/homepages/images/logo_imperial_college_london.png'
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

const positionGraph: PositionProgress = {
    data: [positionGraphData],
    max: 1,
    min: 23
}

const bubbleRoot: BubbleData = {
    name: "Contestant Scores",
    color: "hsl(105, 70%, 50%)",
    children: [
        {
            name: "Question 1",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Kunal Wagle",
                    color: "hsl(236, 70%, 50%)",
                    value: 84.23
                },
                {
                    name: "Rahul Kothare",
                    color: "hsl(322, 70%, 50%)",
                    value: 37.99
                },
                {
                    name: "Lux Mahendran",
                    color: "hsl(47, 70%, 50%)",
                    value: 26.45
                },
                {
                    name: "Alvina Kuhai",
                    color: "hsl(236, 70%, 50%)",
                    value: 84.23
                },
                {
                    name: "Harry Brown",
                    color: "hsl(322, 70%, 50%)",
                    value: 8.88
                },
                {
                    name: "Joe Bloggs",
                    color: "hsl(47, 70%, 50%)",
                    value: 41.19
                },
                {
                    name: "Fred Bloggs",
                    color: "hsl(236, 70%, 50%)",
                    value: 57.55
                },
                {
                    name: "Jane Doe",
                    color: "hsl(322, 70%, 50%)",
                    value: 63.28
                }
            ]
        },
        {
            name: "Question 2",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Kunal Wagle",
                    color: "hsl(236, 70%, 50%)",
                    value: 12.33
                },
                {
                    name: "Rahul Kothare",
                    color: "hsl(322, 70%, 50%)",
                    value: 76.23
                },
                {
                    name: "Alvina Kuhai",
                    color: "hsl(47, 70%, 50%)",
                    value: 49.23
                },
                {
                    name: "Lux Mahendran",
                    color: "hsl(236, 70%, 50%)",
                    value: 57.22
                },
                {
                    name: "Harry Brown",
                    color: "hsl(322, 70%, 50%)",
                    value: 24.62
                },
                {
                    name: "Joe Bloggs",
                    color: "hsl(47, 70%, 50%)",
                    value: 4.19
                },
                {
                    name: "Fred Bloggs",
                    color: "hsl(236, 70%, 50%)",
                    value: 83.36
                },
                {
                    name: "Jane Doe",
                    color: "hsl(322, 70%, 50%)",
                    value: 29.94
                }
            ]
        },
        {
            name: "Question 3",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Kunal Wagle",
                    color: "hsl(236, 70%, 50%)",
                    value: 77.77
                },
                {
                    name: "Rahul Kothare",
                    color: "hsl(322, 70%, 50%)",
                    value: 29.92
                },
                {
                    name: "Lux Mahendran",
                    color: "hsl(47, 70%, 50%)",
                    value: 54.36
                },
                {
                    name: "Alvina Kuhai",
                    color: "hsl(236, 70%, 50%)",
                    value: 88.26
                },
                {
                    name: "Harry Brown",
                    color: "hsl(322, 70%, 50%)",
                    value: 19.94
                },
                {
                    name: "Joe Bloggs",
                    color: "hsl(47, 70%, 50%)",
                    value: 43.26
                },
                {
                    name: "Fred Bloggs",
                    color: "hsl(236, 70%, 50%)",
                    value: 57.55
                },
                {
                    name: "Jane Doe",
                    color: "hsl(322, 70%, 50%)",
                    value: 63.28
                }
            ]
        },
        {
            name: "Question 4",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Kunal Wagle",
                    color: "hsl(236, 70%, 50%)",
                    value: 84.23
                },
                {
                    name: "Lux Mahendran",
                    color: "hsl(322, 70%, 50%)",
                    value: 26.19
                },
                {
                    name: "Rahul Kothare",
                    color: "hsl(47, 70%, 50%)",
                    value: 26.45
                },
                {
                    name: "Alvina Kuhai",
                    color: "hsl(236, 70%, 50%)",
                    value: 84.23
                },
                {
                    name: "Harry Brown",
                    color: "hsl(322, 70%, 50%)",
                    value: 46.65
                },
                {
                    name: "Joe Bloggs",
                    color: "hsl(47, 70%, 50%)",
                    value: 41.19
                },
                {
                    name: "Fred Bloggs",
                    color: "hsl(236, 70%, 50%)",
                    value: 88.32
                },
                {
                    name: "Jane Doe",
                    color: "hsl(322, 70%, 50%)",
                    value: 63.28
                }
            ]
        },
        {
            name: "Question 5",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Kunal Wagle",
                    color: "hsl(236, 70%, 50%)",
                    value: 84.23
                },
                {
                    name: "Rahul Kothare",
                    color: "hsl(322, 70%, 50%)",
                    value: 37.99
                },
                {
                    name: "Lux Mahendran",
                    color: "hsl(47, 70%, 50%)",
                    value: 26.45
                },
                {
                    name: "Harry Brown",
                    color: "hsl(236, 70%, 50%)",
                    value: 38.18
                },
                {
                    name: "Jane Doe",
                    color: "hsl(322, 70%, 50%)",
                    value: 8.88
                },
                {
                    name: "Alvina Kuhai",
                    color: "hsl(47, 70%, 50%)",
                    value: 41.19
                },
                {
                    name: "Joe Bloggs",
                    color: "hsl(236, 70%, 50%)",
                    value: 97.72
                },
                {
                    name: "Fred Bloggs",
                    color: "hsl(322, 70%, 50%)",
                    value: 63.28
                }
            ]
        },
        {
            name: "Question 6",
            color: "hsl(26, 70%, 50%)",
            children: [
                {
                    name: "Kunal Wagle",
                    color: "hsl(236, 70%, 50%)",
                    value: 84.23
                },
                {
                    name: "Joe Bloggs",
                    color: "hsl(322, 70%, 50%)",
                    value: 37.99
                },
                {
                    name: "Fred Bloggs",
                    color: "hsl(47, 70%, 50%)",
                    value: 26.45
                },
                {
                    name: "Lux Mahendran",
                    color: "hsl(236, 70%, 50%)",
                    value: 12.43
                },
                {
                    name: "Rahul Kothare",
                    color: "hsl(322, 70%, 50%)",
                    value: 8.88
                },
                {
                    name: "Harry Brown",
                    color: "hsl(47, 70%, 50%)",
                    value: 41.19
                },
                {
                    name: "Alvina Kuhai",
                    color: "hsl(236, 70%, 50%)",
                    value: 7.55
                },
                {
                    name: "Jane Doe",
                    color: "hsl(322, 70%, 50%)",
                    value: 3.28
                }
            ]
        }
    ]
}

const bubbleData: ScoreGraph = {
    data: bubbleRoot
}

const gradData: GradGraph = {
    data: [
        {
            year: 2020,
            Q1: 43.35,
            Q1Color: "#007788",
            Q2: 39.35,
            Q2Color: "#159897",
            Q3: 23.95,
            Q3Color: "#21ADA8",
            Q4: 54.25,
            Q4Color: "#7AD7F0",
            Q5: 72.35,
            Q5Color: "#92DFF3",
            Q6: 12.35,
            Q6Color: "#B7E9F7"
        },
        {
            year: 2021,
            Q1: 34.35,
            Q1Color: "#007788",
            Q2: 39.35,
            Q2Color: "#159897",
            Q3: 23.95,
            Q3Color: "#21ADA8",
            Q4: 27.25,
            Q4Color: "#7AD7F0",
            Q5: 72.35,
            Q5Color: "#92DFF3",
            Q6: 12.35,
            Q6Color: "#B7E9F7"
        },
        {
            year: 2022,
            Q1: 43.35,
            Q1Color: "#007788",
            Q2: 12.35,
            Q2Color: "#159897",
            Q3: 23.95,
            Q3Color: "#21ADA8",
            Q4: 54.25,
            Q4Color: "#7AD7F0",
            Q5: 91.35,
            Q5Color: "#92DFF3",
            Q6: 12.35,
            Q6Color: "#B7E9F7"
        },
        {
            year: 2023,
            Q1: 4.45,
            Q1Color: "#007788",
            Q2: 39.35,
            Q2Color: "#159897",
            Q3: 23.95,
            Q3Color: "#21ADA8",
            Q4: 54.25,
            Q4Color: "#7AD7F0",
            Q5: 19.92,
            Q5Color: "#92DFF3",
            Q6: 12.35,
            Q6Color: "#B7E9F7"
        },
        {
            year: 2024,
            Q1: 43.35,
            Q1Color: "#007788",
            Q2: 56.32,
            Q2Color: "#159897",
            Q3: 23.95,
            Q3Color: "#21ADA8",
            Q4: 77.71,
            Q4Color: "#7AD7F0",
            Q5: 72.35,
            Q5Color: "#92DFF3",
            Q6: 12.35,
            Q6Color: "#B7E9F7"
        }
    ]
}

export const configureMock = (mock: MockAdapter) => {
    mock
        .onGet(`${getUrl(Region.UK)}team/stats/123456`)
        .reply(200, uni)
        .onGet(`${getUrl(Region.UK)}graphs/posuni/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.UK)}graphs/bubble/123456`)
        .reply(200, bubbleData)
        .onGet(`${getUrl(Region.UK)}graphs/bar/123456`)
        .reply(200, gradData)
        .onGet(`${getUrl(Region.AMER)}team/stats/123456`)
        .reply(200, uni)
        .onGet(`${getUrl(Region.AMER)}graphs/posuni/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.AMER)}graphs/bubble/123456`)
        .reply(200, bubbleData)
        .onGet(`${getUrl(Region.AMER)}graphs/bar/123456`)
        .reply(200, gradData)
        .onGet(`${getUrl(Region.SWIS)}team/stats/123456`)
        .reply(200, uni)
        .onGet(`${getUrl(Region.SWIS)}graphs/posuni/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.SWIS)}graphs/bubble/123456`)
        .reply(200, bubbleData)
        .onGet(`${getUrl(Region.SWIS)}graphs/bar/123456`)
        .reply(200, gradData)
        .onGet(`${getUrl(Region.POLAND)}team/stats/123456`)
        .reply(200, uni)
        .onGet(`${getUrl(Region.POLAND)}graphs/posuni/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.POLAND)}graphs/bubble/123456`)
        .reply(200, bubbleData)
        .onGet(`${getUrl(Region.POLAND)}graphs/bar/123456`)
        .reply(200, gradData)
        .onGet(`${getUrl(Region.INDIA)}team/stats/123456`)
        .reply(200, uni)
        .onGet(`${getUrl(Region.INDIA)}graphs/posuni/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.INDIA)}graphs/bubble/123456`)
        .reply(200, bubbleData)
        .onGet(`${getUrl(Region.INDIA)}graphs/bar/123456`)
        .reply(200, gradData)
        .onGet(`${getUrl(Region.GLOBAL)}team/stats/123456`)
        .reply(200, uni)
        .onGet(`${getUrl(Region.GLOBAL)}graphs/posuni/123456`)
        .reply(200, positionGraph)
        .onGet(`${getUrl(Region.GLOBAL)}graphs/bubble/123456`)
        .reply(200, bubbleData)
        .onGet(`${getUrl(Region.GLOBAL)}graphs/bar/123456`)
        .reply(200, gradData)
}