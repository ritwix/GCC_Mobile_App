import {UserState} from "./types";
import {Action, handleActions} from "redux-actions";
import {contestantSignedUp, UserActions} from "./actions";
import {Region} from "../../../utilities/urls";
import _ from "lodash";
import {act} from "react-dom/test-utils";

export const initialState: UserState = {
    loggedInGitHub: false,
    githubUsername: "",
    promoCode: "",
    navBarRegion: Region.GLOBAL,
    navBarRegionSelected: false,
    qrCodeLink: "",
    contestantId: undefined,
    previousPage: "",
    contestantName: "",
    contestantEmail: "",
    githubAvatar: ""
}

const loggedIntoGithub = (state: UserState, action: Action<any>): UserState => {
    const qrCodeLink = "https://credit-suisse.com/pwp/hr/en/codingchallenge/#/howtoplay?promocode=" + action.payload.login
    return {
        ...state,
        loggedInGitHub: true,
        githubUsername: action.payload.login,
        qrCodeLink: qrCodeLink,
        contestantId: action.payload.contestantId,
        githubAvatar: action.payload.avatar_url
    }
}

const getPromoCodeFromURL = (state: UserState, action: Action<any>): UserState => {
    let promoCode = window.location.hash;
    let code = _.split(promoCode, "promocode=")[1]
    return {
        ...state,
        promoCode: code
    }
}

const loggedOutGithub = (state: UserState, action: Action<any>): UserState => {

    return {
        ...state,
        loggedInGitHub: false,
        githubUsername: "",
        promoCode: "",
        navBarRegion: Region.GLOBAL,
        navBarRegionSelected: false,
        qrCodeLink: "",
        contestantId: undefined,
        contestantName: "",
        contestantEmail: "",
        githubAvatar: ""
    }
}

const changeNavBarSelectedRegion = (state: UserState, action: Action<any>): UserState => {
    return {
        ...state,
        navBarRegion: action.payload,
        navBarRegionSelected: true
    }
}


const storePage = (state: UserState, action: Action<any>): UserState => ({
    ...state,
    previousPage: action.payload
})

const contestantSignedUp = (state: UserState, action: Action<any>): UserState => {
    return {
        ...state,
        contestantId: action.payload.id,
        contestantName: action.payload.name,
        contestantEmail: action.payload.email
    }
}


const reducer = handleActions(
    {
        [UserActions.LOGIN_USER_GITHUB]: loggedIntoGithub,
        [UserActions.LOGOUT_USER_GITHUB]: loggedOutGithub,
        [UserActions.CHANGE_SELECTED_REGION]: changeNavBarSelectedRegion,
        [UserActions.GET_PROMO_CODE]: getPromoCodeFromURL,
        [UserActions.STORE_PAGE]: storePage,
        [UserActions.CONTESTANT_SIGNED_UP]: contestantSignedUp
    },
    initialState
)

export default reducer