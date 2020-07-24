import {createAction} from 'redux-actions'
import {Region} from "../../../utilities/urls";

export namespace UserActions {
    export const LOGIN_USER_GITHUB = 'USER/LOGIN_USER_GITHUB'
    export const LOGOUT_USER_GITHUB = 'USER/LOGOUT_USER_GITHUB'
    export const CONTESTANT_SIGNED_UP = 'USER/CONTESTANT_SIGNED_UP'
    export const CHANGE_SELECTED_REGION = 'USER/CHANGE_SELECTED_REGION'
    export const GET_PROMO_CODE = 'USER/GET_PROMO_CODE'
    export const STORE_PAGE = 'USER/STORE_PAGE'
}

export const loginContestantGithub = createAction<any>(UserActions.LOGIN_USER_GITHUB)
export const logoutContestantGithub = createAction<any>(UserActions.LOGOUT_USER_GITHUB)
export const changeNavBarRegion = createAction<Region>(UserActions.CHANGE_SELECTED_REGION)
export const getPromoCode = createAction<any>(UserActions.GET_PROMO_CODE)
export const storePage = createAction<string>(UserActions.STORE_PAGE)
export const contestantSignedUp = createAction<any>(UserActions.CONTESTANT_SIGNED_UP)