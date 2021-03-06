import React, { ReactElement, useEffect } from 'react'
import Router from 'next/router'
import { AUTH_APIS } from '../utils/auth'
import LoadingModal from 'components/common/modal/LoadingModal'
import commonView from '../common/commonView'
import { useMain } from '../redux/main/hooks'

export default function PageCallback(): ReactElement {
  const { setAlertCode } = useMain()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let url = new URL(document.location.href)
      let returnUrl = url.searchParams.get('return_url') || ''

      if (returnUrl && returnUrl === 'silent') {
        // console.log('This page is made for Silent LoginButton.')
      } else {
        // 스크롤 숨김
        commonView.setBodyStyleLock()

        AUTH_APIS.handleAuthentication(window.location)
          .then((username: string) =>
            Router.push(
              {
                pathname: '/profile_page',
                query: { identification: username }
              },
              '/@' + username
            )
          )
          .catch((err): void => {
            console.log('err: ', err)
            setAlertCode(2004, {})
            Router.push('/')
          })
      }
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
