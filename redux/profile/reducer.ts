import { SET_WITHDRAW_PENDING } from './types'
import { ProfileInitState } from '../../typings/interfaces'
import { ProfileAction } from './actions'

// 초기 상태
const initState: ProfileInitState = {
  withdrawPending: false
}

// 리듀서
const reducer = (state = initState, action: ProfileAction) => {
  switch (action.type) {
    case SET_WITHDRAW_PENDING:
      return {
        ...state,
        withdrawPending: action.withdrawPending
      }
    default:
      return state
  }
}

export type ProfileState = ReturnType<typeof reducer>
export default reducer
