import { SET_SHOW_ANONYMOUS, SET_ONE_PAGE } from './types'
import { TrackingInitState } from '../../typings/interfaces'
import { TrackingAction } from './actions'

// 초기 상태
const initState: TrackingInitState = {
  showAnonymous: false,
  showOnePage: false
}

// 리듀서
const reducer = (state = initState, action: TrackingAction) => {
  switch (action.type) {
    case SET_SHOW_ANONYMOUS:
      return {
        ...state,
        showAnonymous: action.showAnonymous
      }
    case SET_ONE_PAGE:
      return {
        ...state,
        showOnePage: action.showOnePage
      }
    default:
      return state
  }
}

export type TrackingState = ReturnType<typeof reducer>
export default reducer
