import { Region, getUrl } from "../../../utilities/urls"
import MockAdapter from "axios-mock-adapter/types"

const gitTokenResponse = {
    name: 'Kunal Wagle',
    login: 'kunalwagle',
    contestantId: '123456',
    email: 'specialk109@gmail.com'
}

const uk = [
    'Imperial College London',
    'University College London',
    'Kings College London',
    'Oxford University',
    'Cambridge University',
    'Durham University',
    'University of Manchester'
]

const us = [
    'Massachusetts Institute of Technology (MIT)',
    'Stanford University',
    'Harvard University',
    'California Institute of Technology (Caltech)',
    'University of Chicago',
    'Princeton University',
    'Cornell University',
    'University of Pennsylvania'
]

const ch = [
    'International University in Geneva',
    'United International Business Schools (UIBS)' ,
    'University of St.Gallen (HSG)',  
    'SBS Swiss Business School', 
    'ETH Zurich - Swiss Federal Institute of Technology'
]

const india = [
    'Indian Institute of Technology Bombay (IITB)',		
    'Indian Institute of Science', 		
    'Indian Institute of Technology Madras (IITM)', 		
    'Indian Institute of Technology Delhi (IITD)', 		
    'Indian Institute of Technology Kharagpur (IIT-KGP)', 	
    'Indian Institute of Technology Kanpur (IITK)',	
    'University of Hyderabad',	
    'University of Delhi',	
    'Indian Institute of Technology Roorkee (IITR)',		
    'Indian Institute of Technology Guwahati (IITG)',		
    'University of Calcutta',	
    'Jadavpur University'
]

const pl = [
    'AGH University of Science and Technology',
    'University of Bielsko-Biała',
    'Białystok Technical University',
    'Częstochowa University of Technology',
    'Gdańsk University of Technology',
    'Silesian University of Technology'
]

export const configureMock = (mock: MockAdapter) => {
    const loginUrl = 'https://cscc-gl.herokuapp.com/github/login/'
    mock
        .onGet(`${getUrl(Region.GLOBAL)}universitylist/uk`)
        .reply(200, uk)
        .onGet(`${getUrl(Region.GLOBAL)}universitylist/us`)
        .reply(200, us)
        .onGet(`${getUrl(Region.GLOBAL)}universitylist/in`)
        .reply(200, india)
        .onGet(`${getUrl(Region.GLOBAL)}universitylist/pl`)
        .reply(200, pl)
        .onGet(`${getUrl(Region.GLOBAL)}universitylist/ch`)
        .reply(200, ch)
        .onGet(new RegExp(`${loginUrl}*`))
        .reply(200, gitTokenResponse)
        .onAny()
        .passThrough()
        
}