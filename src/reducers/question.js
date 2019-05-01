import { FETCH_QUESTIONS_FOR_LOGGEDIN_USER,  CREATE_QUESTION_BY_LOGGEDIN_USER } from '../actions/question'

const initialState = {
  questions: []
}

const question = (state = initialState, action) => {
  switch(action.type){
    case CREATE_QUESTION_BY_LOGGEDIN_USER:
      return state
      case FETCH_QUESTIONS_FOR_LOGGEDIN_USER:
      return {...state, questions: action.questions}
    default:
      return state
  }
}

export default question