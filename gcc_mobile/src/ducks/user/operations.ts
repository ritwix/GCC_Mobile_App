import {Dispatch} from "redux";
import {
    logoutContestantGithub,
    loginContestantGithub,
    getPromoCode,
    storePage, contestantSignedUp
} from "./actions";
import _ from "lodash";
import axios from "axios";
import {getUnis} from "./api";
import {getShortNameForRegionName} from "../../../utilities/urls";
import {Simulate} from "react-dom/test-utils";
import waiting = Simulate.waiting;

const loginIntoGithub = (value: boolean, currentPage: string) => (dispatch: Dispatch) => {
    const url = "https://github.com/login/oauth/authorize?client_id=221628997cefa6f275bf"
    if (value) {
        window.open(url, "_self")
        dispatch(storePage(currentPage))
    } else {
        dispatch(logoutContestantGithub(value))
    }
}

const githubAccessToken = () => (dispatch: Dispatch) => {
    let user_token = window.location.search.substr(1);
    let code = _.split(user_token, "=")[1]
    let access_token_url = "https://cscc-gl.herokuapp.com/github/login/" + code
    console.log(access_token_url)
    axios.get<any>(access_token_url, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(loginContestantGithub(response.data))
            dispatch(hasContestantSignedUp(response.data))
        }
    }).catch(function (error) {
        console.log(error);
    })
}

const hasContestantSignedUp = (data: any) => (dispatch: Dispatch) => {
    let gitUsername = data.login
    let url = "https://cscc-gl.herokuapp.com/contestant/git/" + gitUsername
    axios.get<any>(url, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    }).then(function (response) {
        if (response.status == 200 && response.data != "") {
            dispatch(contestantSignedUp(response.data))
        }
    }).catch(function (error) {
        console.log(error);
    })

}


export const handleGetPromoCode = () => (dispatch: Dispatch) => {
    dispatch(getPromoCode())
}


export default {
    loginIntoGithub,
    githubAccessToken,
    handleGetPromoCode
}