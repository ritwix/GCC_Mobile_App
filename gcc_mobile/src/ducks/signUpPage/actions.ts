import {createAction} from 'redux-actions'

export namespace SignUpActions {
    export const SUBMIT = 'SIGNUP/SUBMIT'
    export const MARKETING_CHECKED = 'SIGNUP/MARKETING_CHECKED'
    export const PRIVACY_CHECKED = 'SIGNUP/PRIVACY_CHECKED'
    export const CHANGE_TITLE = 'SIGNUP/CHANGE_TITLE'
    export const CHANGE_NAME = 'SIGNUP/CHANGE_NAME'
    export const CHANGE_FIRST_NAME = 'SIGNUP/CHANGE_FIRST_NAME'
    export const CHANGE_LAST_NAME = 'SIGNUP/CHANGE_LAST_NAME'
    export const CHANGE_COURSE = 'SIGNUP/CHANGE_COURSE'
    export const CHANGE_EMAIL = 'SIGNUP/CHANGE_EMAIL'
    export const CHANGE_REGION = 'SIGNUP/CHANGE_REGION'
    export const CHANGE_UNIVERSITY = 'SIGNUP/CHANGE_UNIVERSITY'
    export const CHANGE_GRADUATION_YEAR = 'SIGNUP/CHANGE_GRADUATION_YEAR'
    export const GOT_UNIVERSITIES = 'SIGNUP/GOT_UNIVERSITIES'
    export const SEARCH = 'SIGNUP/SEARCH'
}

export const signUpSubmit = createAction(SignUpActions.SUBMIT)
export const titleChange = createAction<any>(SignUpActions.CHANGE_TITLE)
export const nameChange = createAction<any>(SignUpActions.CHANGE_NAME)
export const firstNameChange = createAction<any>(SignUpActions.CHANGE_FIRST_NAME)
export const lastNameChange = createAction<any>(SignUpActions.CHANGE_LAST_NAME)
export const courseChange = createAction<any>(SignUpActions.CHANGE_COURSE)
export const emailChange = createAction<any>(SignUpActions.CHANGE_EMAIL)
export const regionChange = createAction<any>(SignUpActions.CHANGE_REGION)
export const universityChange = createAction<any>(SignUpActions.CHANGE_UNIVERSITY)
export const graduationYearChange = createAction<any>(SignUpActions.CHANGE_GRADUATION_YEAR)
export const gotUniversities = createAction<string[]>(SignUpActions.GOT_UNIVERSITIES)
export const searchComplete = createAction<any>(SignUpActions.SEARCH)
export const marketingChecked = createAction(SignUpActions.MARKETING_CHECKED)
export const privacyChecked = createAction(SignUpActions.PRIVACY_CHECKED)