export const FETCH_QUESTIONS_FOR_LOGGEDIN_USER = 'FETCH_QUESTIONS_FOR_LOGGEDIN_USER'
export const CREATE_QUESTION_BY_LOGGEDIN_USER = 'CREATE_QUESTION_BY_LOGGEDIN_USER'

export const fetchQuestions = () => (dispatch) => {
  dispatch({type: FETCH_QUESTIONS_FOR_LOGGEDIN_USER})
}

export const createQuestion = (question) => (dispatch) => {
  dispatch({type: CREATE_QUESTION_BY_LOGGEDIN_USER, data: question})
}