import {
  SET_ALERT_CODE,
  SET_INIT_COMPLETE,
  SET_IS_MOBILE,
  SET_MODAL,
  SET_MY_INFO,
  SET_TAG_LIST
} from './types'
import UserInfo from '../../service/model/UserInfo'
import { InitState } from '../../typings/interfaces'
import { MainAction } from './actions'

// 초기 상태
const initState: InitState = {
  initComplete: false,
  myInfo: new UserInfo(null),
  alertCode: -1,
  alertData: {},
  tagList: [],
  modalCode: '',
  modalData: {},
  isMobile: false
}

// 리듀서
const reducer = (state = initState, action: MainAction) => {
  switch (action.type) {
    case SET_INIT_COMPLETE:
      return {
        ...state,
        initComplete: action.initComplete
      }
    case SET_MY_INFO:
      return {
        ...state,
        myInfo: action.myInfo
      }
    case SET_TAG_LIST:
      return {
        ...state,
        tagList: action.tagList
      }
    case SET_IS_MOBILE:
      return {
        ...state,
        isMobile: action.isMobile
      }
    case SET_ALERT_CODE:
      return {
        ...state,
        alertCode: action.alertCode,
        alertData: action.alertData
      }
    case SET_MODAL:
      return {
        ...state,
        modalCode: action.modalCode,
        modalData: action.modalData
      }
    default:
      return state
  }
}

export type MainState = ReturnType<typeof reducer>
export default reducer
