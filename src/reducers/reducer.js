import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import currentPage from './currentPage'
import user from './user'

const initialState = {
  authedUser: null,
  users: [],
  currentPage: null,
  questions: []
}
const rootReducer = combineReducers({currentPage, user})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store