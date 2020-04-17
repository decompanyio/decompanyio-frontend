// 액션 생성자
import { SET_SHOW_ANONYMOUS, SET_ONE_PAGE } from './types'

export const actions = {
  showAnonymous: (showAnonymous: boolean) => ({
    type: SET_SHOW_ANONYMOUS,
    showAnonymous
  }),
  showOnePage: (showOnePage: boolean) => ({ type: SET_ONE_PAGE, showOnePage })
}

export type TrackingAction =
  | ReturnType<typeof actions.showAnonymous>
  | ReturnType<typeof actions.showOnePage>
