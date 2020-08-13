import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import UserInfo from '../../graphql/models/UserInfo'
import { actions } from './actions'
import { StateProps } from '../../typings/interfaces'
import TagListItem from '../../service/model/TagListItem'

export const useMain = () => {
  const initComplete = useSelector(({ main }: StateProps) => main.initComplete)
  const myInfo = useSelector(({ main }: StateProps) => main.myInfo)
  const tagList = useSelector(({ main }: StateProps) => main.tagList)
  const isMobile = useSelector(({ main }: StateProps) => main.isMobile)
  const alertCode = useSelector(({ main }: StateProps) => main.alertCode)
  const alertData = useSelector(({ main }: StateProps) => main.alertData)
  const modalCode = useSelector(({ main }: StateProps) => main.modalCode)
  const modalData = useSelector(({ main }: StateProps) => main.modalData)

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
    (tagList: TagListItem[]) => dispatch(actions.tagList(tagList)),
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
