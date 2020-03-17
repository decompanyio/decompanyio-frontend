import React, { ReactElement, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Router from 'next/router'
import { AUTH_APIS } from '../utils/auth'
import { setActionMain } from '../redux/reducer/main'
import LoadingModal from 'components/common/modal/LoadingModal'
import commonView from '../common/commonView'

export default function(): ReactElement {
  const dispatch = useDispatch()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (AUTH_APIS.isAuthenticated()) Router.push('/')

      // 스크롤 숨김
      commonView.setBodyStyleLock()
      AUTH_APIS.handleAuthentication(window.location)
        .then((email: string) =>
          Router.push(
            {
              pathname: '/my_page',
              query: { identification: email }
            },
            '/@' + email
          )
        )
        .catch((err): void => {
          console.log('err: ', err)
          dispatch(setActionMain.alertCode(2004, null))
          Router.push('/')
        })
    }

    return () => {
      // 스크롤 표시
      commonView.setBodyStyleUnlock()
    }
  }, [])

  return (
    <div>
      <LoadingModal />
      <div id="callbackIframeContainer" />
    </div>
  )
}
