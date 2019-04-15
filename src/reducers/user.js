import { GET_USER, SET_USER } from "../actions/user";

const initialState = {
  users: []
}


const currentPage = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return state
    case SET_USER:
      return state
    default:
    return state
  }
}

export default currentPage