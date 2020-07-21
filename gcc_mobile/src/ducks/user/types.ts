import {Region} from "../../../utilities/urls";

export interface UserState {
    loggedInGitHub: boolean,
    githubUsername: string,
    contestantId?: string,
    promoCode: string,
    navBarRegion: Region,
    navBarRegionSelected: boolean,
    qrCodeLink: string,
    previousPage: string,
    hasUserSignedUp: boolean,
    contestantName : string,
    contestantEmail : string,
    githubAvatar: string
}