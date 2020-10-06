import { combineReducers } from 'redux'
import main from './main/reducer'
import tracking from './tracking/reducer'
import profile from './profile/reducer'

export default combineReducers({
  main,
  profile,
  tracking
})
