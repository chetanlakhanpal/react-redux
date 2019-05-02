import { SET_USERS, LOGIN_USER, LOGOUT_USER} from "../actions/user";

const initialState = {
  users: [],
  loggedInUser: {}
}


const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      window.sessionStorage.setItem('user', JSON.stringify(action.loggedInUser))
      return {...state, loggedInUser: action.loggedInUser}
    case LOGOUT_USER:
      window.sessionStorage.removeItem('user')
      return {...state, loggedInUser: null}
    case SET_USERS:
      return {...state, users: action.users}
    default:
      return state
  }
}

export default users