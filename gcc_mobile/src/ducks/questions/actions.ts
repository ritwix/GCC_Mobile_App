import {createAction} from 'redux-actions'
// import {QuestionState} from './types'

export namespace QuestionsActions {
    export const CHANGE = 'QUESTIONS/CHANGED'
    export const CHANGE_NUMBER = 'QUESTIONS/CHANGED_NUMBER'
}

export const changeQuestion = createAction<number>(QuestionsActions.CHANGE)
export const changeQuestionNumber = createAction<number>(QuestionsActions.CHANGE_NUMBER)