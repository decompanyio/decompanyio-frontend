import { combineReducers } from 'redux'
import main from './main/reducer'
import tracking from './tracking/reducer'

export default combineReducers({
  main,
  tracking
})
