// 액션 생성자
import { SET_WITHDRAW_PENDING } from './types'

export const actions = {
  withdrawPending: (withdrawPending: boolean) => ({
    type: SET_WITHDRAW_PENDING,
    withdrawPending
  })
}

export type ProfileAction = ReturnType<typeof actions.withdrawPending>
