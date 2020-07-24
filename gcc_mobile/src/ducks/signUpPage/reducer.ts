import {SignUpPageState} from './types'
import {Action, handleActions} from 'redux-actions'
import {privacyChecked, SignUpActions} from './actions'

export const initialState: SignUpPageState = {
    title: "",
    firstName: "",
    lastName: "",
    course: "",
    email: "",
    region: "",
    university: "",
    graduationYear: 0,
    searchResults: [],
    universities: {
        loading: false
    },
    privacyChecked: false,
    marketingChecked: false
}

const submit = (state: SignUpPageState, action: Action<any>): SignUpPageState => {
    console.log(state);
    return {
        ...state
    }
}


const changeTitle = (state: SignUpPageState, action: Action<any>): SignUpPageState => {
    return {
        ...state,
        title: action.payload,
    }
}

const changeFirstName = (state: SignUpPageState, action: Action<any>): SignUpPageState => {
    return {
        ...state,
        firstName: action.payload
    }
}

const changeLastName = (state: SignUpPageState, action: Action<any>): SignUpPageState => {
    return {
        ...state,
        lastName: action.payload
    }
}

const changeCourse = (state: SignUpPageState, action: Action<any>): SignUpPageState => {
    return {
        ...state,
        course: action.payload,
    }
}

const changeEmail = (state: SignUpPageState, action: Action<any>): SignUpPageState => {
    return {
        ...state,
        email: action.payload,
    }
}

const changeRegion = (state: SignUpPageState, action: Action<any>): SignUpPageState => {
    return {
        ...state,
        region: action.payload,
        universities: {
            ...state.universities,
            loading: true
        }
    }
}

const changeUniversity = (state: SignUpPageState, action: Action<any>): SignUpPageState => {
    return {
        ...state,
        university: action.payload,
    }
}

const changeGraduationYear = (state: SignUpPageState, action: Action<any>): SignUpPageState => {
    return {
        ...state,
        graduationYear: action.payload,
    }
}

const gotUniversityList = (state: SignUpPageState, action: Action<any>): SignUpPageState => ({
    ...state,
    universities: {
        ...state.universities,
        details: action.payload,
        loading: false
    }
})

const search = (state: SignUpPageState, action: Action<any>): SignUpPageState => ({
    ...state,
    searchResults: action.payload
})

const changePrivacyChecked = (state: SignUpPageState, action: Action<any>): SignUpPageState => {
    let checked = !state.privacyChecked
    console.log(checked)
    return {
        ...state,
        privacyChecked: checked,
    }
}


const changeMarketingChecked = (state: SignUpPageState, action: Action<any>): SignUpPageState => {
    let checked = !state.marketingChecked
    return {
        ...state,
        marketingChecked: checked,
    }
}

const reducer = handleActions(
    {
        [SignUpActions.SUBMIT]: submit,
        [SignUpActions.CHANGE_TITLE]: changeTitle,
        [SignUpActions.CHANGE_FIRST_NAME]: changeFirstName,
        [SignUpActions.CHANGE_LAST_NAME]: changeLastName,
        [SignUpActions.CHANGE_COURSE]: changeCourse,
        [SignUpActions.CHANGE_EMAIL]: changeEmail,
        [SignUpActions.CHANGE_REGION]: changeRegion,
        [SignUpActions.CHANGE_UNIVERSITY]: changeUniversity,
        [SignUpActions.CHANGE_GRADUATION_YEAR]: changeGraduationYear,
        [SignUpActions.GOT_UNIVERSITIES]: gotUniversityList,
        [SignUpActions.PRIVACY_CHECKED]: changePrivacyChecked,
        [SignUpActions.MARKETING_CHECKED]: changeMarketingChecked,
        [SignUpActions.SEARCH]: search,
    },
    initialState
)

export default reducer