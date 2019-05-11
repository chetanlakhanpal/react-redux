import { SET_QUESTIONS,  ADD_QUESTION, ADD_ANSWER } from '../actions/question'

const initialState = {
  allQuestions: [],
  savingQuestion: false
}

const questions = (state = initialState, action) => {
  switch(action.type){
    case ADD_ANSWER:
      const {authedUser, qid, answer} = action.data
      let allQuestions = state.allQuestions
      allQuestions[qid][answer].votes.push(authedUser)
      return {savingQuestion: state.savingQuestion, allQuestions: allQuestions}
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