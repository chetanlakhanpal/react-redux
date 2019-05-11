import { SET_USERS, LOGIN_USER, LOGOUT_USER, ADD_QUESTION_FOR_LOGGEDIN_USER} from "../actions/user";
import { ADD_ANSWER } from "../actions/question";

const initialState = {
  users: [],
  loggedInUser: null
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
    const {qid, answer, authedUser} = action.data
    let loggedInUserData = state.loggedInUser
    loggedInUserData.answers[qid] = answer

    let usersData = state.users
    usersData[authedUser] = loggedInUserData

    return {users: usersData, loggedInUser: loggedInUserData}

    case ADD_QUESTION_FOR_LOGGEDIN_USER:
      let userData = state.loggedInUser
      userData.questions.push(action.data)
      return {...state, loggedInUser: userData}
    case LOGIN_USER:
      return {...state, loggedInUser: action.loggedInUser}
    case LOGOUT_USER:
      return {...state, loggedInUser: null}
    case SET_USERS:
      return {...state, users: action.users}
    default:
      return state
  }
}

export default users