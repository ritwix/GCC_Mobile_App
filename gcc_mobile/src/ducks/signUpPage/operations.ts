import {Dispatch} from 'redux'
import {
    emailChange,
    gotUniversities,
    graduationYearChange,
    nameChange,
    regionChange, searchComplete,
    titleChange,
    universityChange,
    marketingChecked, privacyChecked, signUpSubmit, courseChange, firstNameChange, lastNameChange
} from "./actions";
import {contestantSignedUp} from "../user/actions";
import {getUnis} from "./api";
import {getServerNameForRegion} from "../../../utilities/urls";
import _ from "lodash";
import {AppState} from "../../types";
import axios from "axios";
import {loginContestantGithub} from "../user/actions";
import {Redirect} from "react-router";
import * as React from "react";

const handleSubmit = () => (dispatch: Dispatch, getState: () => AppState) => {
    let signUpPage = getState().signUpPage
    let user = getState().user
    let promocode = getState().user.promoCode != ""
    let name = signUpPage.firstName + ' ' + signUpPage.lastName

    dispatch(signUpSubmit())
    let url =
        promocode ? "https://cscc-gl.herokuapp.com/challenge/signup/" + getState().user.promoCode
            : "https://cscc-gl.herokuapp.com/challenge/signup";
    axios.post<any>(url, {
        "course": signUpPage.course,
        "disclaimers": {
            "marketing": signUpPage.marketingChecked,
            "privacy": signUpPage.privacyChecked
        },
        "email": signUpPage.email,
        "gitUsername": user.githubUsername,
        "name": name,
        "region": getServerNameForRegion(signUpPage.region),
        "team": signUpPage.university,
        "graduationYear": signUpPage.graduationYear,
        "title": signUpPage.title,
        "gitAvatar": user.githubAvatar
    }).then(function (response) {
        if (response.status == 200) {
            dispatch(contestantSignedUp(response.data))
        }
    }).catch(function (error) {
        console.log(error);
    })
}

const handleTitleChange = (input: string) => (dispatch: Dispatch) => {
    dispatch(titleChange(input))
}

const handleFirstNameChange = (input: string) => (dispatch: Dispatch) => {
    dispatch(firstNameChange(input))
}

const handleLastNameChange = (input: string) => (dispatch: Dispatch) => {
    dispatch(lastNameChange(input))
}

const handleCourseChange = (input: string) => (dispatch: Dispatch) => {
    dispatch(courseChange(input))
}

const handleEmailChange = (input: string) => (dispatch: Dispatch) => {
    dispatch(emailChange(input))
}

const handlePrivacyChecked = () => (dispatch: Dispatch) => {
    dispatch(privacyChecked())
}

const handleMarketingChecked = () => (dispatch: Dispatch) => {
    dispatch(marketingChecked())
}

const handleRegionChange = (input: string) => (dispatch: Dispatch) => {
    dispatch(regionChange(input))
    getUnis(getServerNameForRegion(input))
        .then(x => dispatch(gotUniversities(x.data)))
        .catch(x => dispatch(gotUniversities(x)))
}

const handleUniversityChange = (input: string) => (dispatch: Dispatch) => {
    dispatch(universityChange(input))
}

const handleGraduationYearChange = (input: number) => (dispatch: Dispatch) => {
    dispatch(graduationYearChange(input))
}

const search = (universities: string[], term: string) => (dispatch: Dispatch) => {
    const results = _.filter(universities, function (element) {
        return element.toLowerCase().includes(term.toLowerCase())
    })
    const formattedResults = results.map(result => {
        return {
            title: result
        }
    })
    dispatch(searchComplete(formattedResults))
    dispatch(universityChange(term))
}


export default {
    handleSubmit,
    handleTitleChange,
    handleFirstNameChange,
    handleLastNameChange,
    handleCourseChange,
    handleEmailChange,
    handleRegionChange,
    handleUniversityChange,
    handleGraduationYearChange,
    handlePrivacyChecked,
    handleMarketingChecked,
    search
}