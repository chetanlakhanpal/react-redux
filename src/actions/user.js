import { _getUsers, _getQuestions } from "../../src/utils/_DATA";
import { SET_QUESTIONS } from '../actions/question'

export const SET_USERS = 'SET_USERS'
export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const ADD_QUESTION_FOR_LOGGEDIN_USER = 'ADD_QUESTION_FOR_LOGGEDIN_USER'

export const addQuestionforLoggedInUser = (question) => (dispatch) => {
  dispatch({
    type: ADD_QUESTION_FOR_LOGGEDIN_USER,
    data: question
  })
}


export const fetchUsers = () => (dispatch) => {
  _getQuestions().then((data) => {
    dispatch({
      type: SET_QUESTIONS,
      data: data
    })
  })
  _getUsers().then((data) => {
    dispatch({
      type: SET_USERS,
      users: data
    })
  })
}

export const loginUser = (user) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
    loggedInUser: user
  })
}

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER
  })
}