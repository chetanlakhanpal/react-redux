import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import users from './user'
import questions from './question'

const rootReducer = combineReducers({users, questions})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store