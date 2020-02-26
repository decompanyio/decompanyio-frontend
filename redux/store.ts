import rootReducer from "./reducer"
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"

const preloadState = applyMiddleware(thunk)(createStore)
export default preloadState(rootReducer)
