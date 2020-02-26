import ReduxTypes from "../reduxTypes"
import UserInfo from "../../service/model/UserInfo"

// 액션 생성자
export const setActionMain = {
  initComplete: (initComplete: boolean) => ({
    type: ReduxTypes.SET_INIT_COMPLETE,
    initComplete
  }),
  myInfo: (myInfo: any) => ({ type: ReduxTypes.SET_MY_INFO, myInfo }),
  isMobile: (isMobile: boolean) => ({
    type: ReduxTypes.SET_IS_MOBILE,
    isMobile
  }),
  alertCode: (alertCode: any, alertData?: any) => ({
    type: ReduxTypes.SET_ALERT_CODE,
    alertCode,
    alertData
  }),
  tagList: (tagList: []) => ({ type: ReduxTypes.SET_TAG_LIST, tagList }),
  modal: (modalCode: any, modalData?: any) => ({
    type: ReduxTypes.SET_MODAL,
    modalCode,
    modalData
  })
  /*uploadTagList: (uploadTagList: []) => ({
    type: ReduxTypes.SET_UPLOAD_TAG_LIST,
    uploadTagList
  })
  documentList: (documentList: {}) => ({
    type: ReduxTypes.SET_DOCUMENT_LIST,
    documentList
  })
  */
}

// 초기 상태
const initState = {
  initComplete: false,
  myInfo: new UserInfo(null),
  alertCode: null,
  alertData: {},
  tagList: [],
  modalCode: null,
  modalData: {},
  isMobile: false
  /*uploadTagList: [],
  documentList: {}*/
}

// 리듀서
export default (state = initState, action: any) => {
  switch (action.type) {
    case ReduxTypes.SET_INIT_COMPLETE:
      return {
        ...state,
        initComplete: action.initComplete
      }
    case ReduxTypes.SET_MY_INFO:
      return {
        ...state,
        myInfo: action.myInfo
      }
    case ReduxTypes.SET_TAG_LIST:
      return {
        ...state,
        tagList: action.tagList
      }
    case ReduxTypes.SET_UPLOAD_TAG_LIST:
      return {
        ...state,
        uploadTagList: action.uploadTagList
      }
    case ReduxTypes.SET_IS_MOBILE:
      return {
        ...state,
        isMobile: action.isMobile
      }
    case ReduxTypes.SET_ALERT_CODE:
      return {
        ...state,
        alertCode: action.alertCode,
        alertData: action.alertData
      }
    case ReduxTypes.SET_MODAL:
      return {
        ...state,
        modalCode: action.modalCode,
        modalData: action.modalData
      }
    case ReduxTypes.SET_DOCUMENT_LIST:
      return {
        ...state,
        documentList: action.documentList
      }
    default:
      return state
  }
}
