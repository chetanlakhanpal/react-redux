import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { ADD_QUESTION_FOR_LOGGEDIN_USER } from "../actions/user";

export const SET_QUESTIONS = 'SET_QUESTIONS'

export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export const addAnswer = (data) => (dispatch) => {
  return _saveQuestionAnswer(data).then(() => {
    dispatch({
      type: ADD_ANSWER,
      data: data
    })
  })
}


export const addQuestion = (question) => (dispatch) => {
  return _saveQuestion(question).then((data) => {
    dispatch({type: ADD_QUESTION_FOR_LOGGEDIN_USER, data: data.id})
    dispatch({type: ADD_QUESTION, data: data})
  })
}
