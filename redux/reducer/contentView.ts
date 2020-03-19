import ReduxTypes from 'redux/reduxTypes'
import Document from '../../service/model/Document'

// 액션 생성자
export const setAction = {
  document: document => ({ type: ReduxTypes.SET_DOCUMENT, document })
}

// 초기 상태
const initState = {
  document: new Document(null)
}

// 리듀서
export default (state = initState, action: any) => {
  switch (action.type) {
    case ReduxTypes.SET_DOCUMENT:
      return {
        ...state,
        document: action.document
      }
    default:
      return state
  }
}
