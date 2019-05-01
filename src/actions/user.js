import { _getUsers, _getQuestions } from "../../src/utils/_DATA";
import { FETCH_QUESTIONS_FOR_LOGGEDIN_USER } from '../actions/question'

export const SET_USERS = 'SET_USERS'
export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGIN_USER = 'LOGIN_USER'


export const fetchUsers = () => (dispatch) => {
  _getUsers().then((data) => {
    dispatch({
      type: SET_USERS,
      users: data
    })
  })
}

export const loginUser = (user) => (dispatch) => {
  _getQuestions().then((data) => {
    dispatch({
      type: FETCH_QUESTIONS_FOR_LOGGEDIN_USER,
      questions: data
    })
  })
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