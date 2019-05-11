import { SET_QUESTIONS,  ADD_QUESTION } from '../actions/question'

const initialState = {
  allQuestions: [],
  savingQuestion: false
}

const questions = (state = initialState, action) => {
  console.log(action.type)
  switch(action.type){
    case ADD_QUESTION:
      let questions = state.allQuestions
      questions[action.data.id] = action.data
      return {savingQuestion: state.savingQuestion, allQuestions: questions}
    case SET_QUESTIONS:
      return {...state, allQuestions: action.data}
    default:
      return state
  }
}

export default questions