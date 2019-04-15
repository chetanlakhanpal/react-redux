export const SET_USER = 'SET_USER'
export const GET_USER = 'GET_USER'

export const getAuthedUser = () => (dispatch) => {
  dispatch({
    type: GET_USER
  })
}

export const setAuthedUser = (user) => (dispatch) => {
  dispatch({
    type: SET_USER,
    user: user
  })
}