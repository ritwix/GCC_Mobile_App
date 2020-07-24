import {Dispatch} from 'redux'
import {changeQuestion, changeQuestionNumber} from './actions'

const nextQuestion = () => (dispatch: Dispatch) => {
    dispatch(changeQuestion(1))
}

const prevQuestion = () => (dispatch: Dispatch) => {
    dispatch(changeQuestion(-1))
}

const changeQuestionNo = (pageNumber: number) => (dispatch: Dispatch) => {
    dispatch(changeQuestionNumber(pageNumber))
}

export default {
    nextQuestion, prevQuestion, changeQuestionNo
}