import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import users from './user'

const rootReducer = combineReducers({users})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store