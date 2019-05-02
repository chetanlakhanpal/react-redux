import { SET_QUESTIONS,  CREATE_QUESTION } from '../actions/question'

const initialState = {
  allQuestions: []
}

const questions = (state = initialState, action) => {
  switch(action.type){
    case CREATE_QUESTION:
      return state
    case SET_QUESTIONS:
      return {...state, allQuestions: action.questions}
    default:
      return state
  }
}

export default questions