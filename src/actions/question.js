export const SET_QUESTIONS = 'SET_QUESTIONS'
export const CREATE_QUESTION = 'CREATE_QUESTION'

export const fetchQuestions = () => (dispatch) => {
  dispatch({type: SET_QUESTIONS})
}

export const createQuestion = (question) => (dispatch) => {
  dispatch({type: CREATE_QUESTION, data: question})
}