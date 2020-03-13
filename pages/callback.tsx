import React, { ReactElement, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Router from 'next/router'
import { AUTH_APIS } from '../utils/auth'
import repos from 'utils/repos'
import { setActionMain } from '../redux/reducer/main'
import LoadingModal from 'components/common/modal/LoadingModal'
import Layout from '../components/Layout'
import commonView from '../common/commonView'

export default function(props): ReactElement {
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (AUTH_APIS.isAuthenticated()) void Router.push('/')

      // 스크롤 숨김
      commonView.setBodyStyleLock()
      AUTH_APIS.handleAuthentication(window.location)
        .then(() =>
          repos.Account.getAccountInfo().then(result => {
            let res = result.user
            res.privateDocumentCount = result.privateDocumentCount // alert data 에 쓰임
            if (!res.username || res.username === '') res.username = res.email
            if (!res.picture) res.picture = localStorage.getItem('user_info')

            dispatch(setActionMain.myInfo(res)) // 나의 정보 SET

            return Router.push(
              {
                pathname: '/my_page',
                query: { identification: res.username }
              },
              '/@' + res.username
            )
          })
        )
        .catch(err => {
          console.log('err', err)
          dispatch(setActionMain.alertCode(2004, null))
          return Router.push('/')
        })
    }

    return () => {
      // 스크롤 표시
      commonView.setBodyStyleUnlock()
    }
  }, [])

  return (
    <Layout title={'Loading . . .'} path="callback" {...props}>
      <LoadingModal />
    </Layout>
  )
}
