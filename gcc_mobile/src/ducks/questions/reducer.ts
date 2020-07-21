import {QuestionState} from './types'
import {Action, handleActions} from 'redux-actions'
import {QuestionsActions} from './actions'

export const initialState: QuestionState = {
    question: 0
}

const changeQuestion = (state: QuestionState, action: Action<any>): QuestionState => {
    let question = state.question + action.payload
    return {
        ...state,
        question: question
    }
}
const changeQuestionNumber = (state: QuestionState, action: Action<any>): QuestionState => {
    return {
        ...state,
        question: action.payload
    }
}

const reducer = handleActions(
    {
        [QuestionsActions.CHANGE]: changeQuestion,
        [QuestionsActions.CHANGE_NUMBER]: changeQuestionNumber,
    },
    initialState
)

export default reducer