const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

//Redux thunk pattern
const getCurrentPage = () => (dispatch) => {
  dispatch({
    type: GET_CURRENT_PAGE
  })
}