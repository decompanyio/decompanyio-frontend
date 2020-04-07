import { useDispatch, useSelector } from 'react-redux'
import { MainState } from './reducer'
import { useCallback } from 'react'
import UserInfo from '../../service/model/UserInfo'
import { actions } from './actions'

export const useMain = () => {
  const initComplete = useSelector((state: MainState) => state.initComplete)
  const myInfo = useSelector((state: MainState) => state.myInfo)
  const tagList = useSelector((state: MainState) => state.tagList)
  const isMobile = useSelector((state: MainState) => state.isMobile)
  const alertCode = useSelector((state: MainState) => state.alertCode)
  const alertData = useSelector((state: MainState) => state.alertData)
  const modalCode = useSelector((state: MainState) => state.modalCode)
  const modalData = useSelector((state: MainState) => state.modalData)

  const dispatch = useDispatch()

  const setInitComplete = useCallback(
    (initComplete: boolean) => dispatch(actions.initComplete(initComplete)),
    [dispatch]
  )

  const setMyInfo = useCallback(
    (myInfo: UserInfo) => dispatch(actions.myInfo(myInfo)),
    [dispatch]
  )

  const setIsMobile = useCallback(
    (isMobile: boolean) => dispatch(actions.isMobile(isMobile)),
    [dispatch]
  )

  const setAlertCode = useCallback(
    (alertCode: number, alertData?: any) =>
      dispatch(actions.alertCode(alertCode, alertData)),
    [dispatch]
  )

  const setTagList = useCallback(
    (tagList: []) => dispatch(actions.tagList(tagList)),
    [dispatch]
  )

  const setModal = useCallback(
    (modalCode: string, modalData?: {}) =>
      dispatch(actions.modal(modalCode, modalData)),
    [dispatch]
  )

  return {
    initComplete,
    myInfo,
    tagList,
    isMobile,
    alertCode,
    alertData,
    modalCode,
    modalData,
    setInitComplete,
    setMyInfo,
    setIsMobile,
    setAlertCode,
    setTagList,
    setModal
  }
}
