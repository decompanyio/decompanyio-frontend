import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { actions } from './actions'
import { StateProps } from '../../typings/interfaces'

export const useTracking = () => {
  const showAnonymous = useSelector(
    ({ tracking }: StateProps) => tracking.showAnonymous
  )
  const showOnePage = useSelector(
    ({ tracking }: StateProps) => tracking.showOnePage
  )

  const dispatch = useDispatch()

  const setShowAnonymous = useCallback(
    (showAnonymous: boolean) => dispatch(actions.showAnonymous(showAnonymous)),
    [dispatch]
  )

  const setShowOnePage = useCallback(
    (showOnePage: boolean) => dispatch(actions.showOnePage(showOnePage)),
    [dispatch]
  )

  return {
    showAnonymous,
    showOnePage,
    setShowOnePage,
    setShowAnonymous
  }
}
