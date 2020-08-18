// 액션 생성자
import {
  SET_ALERT_CODE,
  SET_INIT_COMPLETE,
  SET_IS_MOBILE,
  SET_IS_TABLET,
  SET_MODAL,
  SET_MY_INFO,
  SET_TAG_LIST
} from './types'
import TagListItem from '../../service/model/TagListItem'

export const actions = {
  initComplete: (initComplete: boolean) => ({
    type: SET_INIT_COMPLETE,
    initComplete
  }),
  myInfo: (myInfo: any) => ({ type: SET_MY_INFO, myInfo }),
  isMobile: (isMobile: boolean) => ({
    type: SET_IS_MOBILE,
    isMobile
  }),
  isTablet: (isTablet: boolean) => ({
    type: SET_IS_TABLET,
    isTablet
  }),
  alertCode: (alertCode: any, alertData?: any) => ({
    type: SET_ALERT_CODE,
    alertCode,
    alertData
  }),
  tagList: (tagList: TagListItem[]) => ({ type: SET_TAG_LIST, tagList }),
  modal: (modalCode: any, modalData?: any) => ({
    type: SET_MODAL,
    modalCode,
    modalData
  })
}

export type MainAction =
  | ReturnType<typeof actions.initComplete>
  | ReturnType<typeof actions.myInfo>
  | ReturnType<typeof actions.isMobile>
  | ReturnType<typeof actions.isTablet>
  | ReturnType<typeof actions.alertCode>
  | ReturnType<typeof actions.tagList>
  | ReturnType<typeof actions.modal>
