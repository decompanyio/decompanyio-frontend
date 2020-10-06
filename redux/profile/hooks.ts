import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { actions } from './actions'
import { StateProps } from '../../typings/interfaces'

export const useProfile = () => {
  const withdrawPending = useSelector(
    ({ profile }: StateProps) => profile.withdrawPending
  )

  const dispatch = useDispatch()

  const setWithdrawPending = useCallback(
    (showAnonymous: boolean) =>
      dispatch(actions.withdrawPending(showAnonymous)),
    [dispatch]
  )

  return {
    withdrawPending,
    setWithdrawPending
  }
}
