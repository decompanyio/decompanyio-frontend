import ReactTooltip from 'react-tooltip'
import * as styles from 'public/static/styles/scss/index.scss'
import Header from '../header/HeaderContainer'
import Footer from '../footer/FooterContainer'
import React, { ReactElement, useEffect, useState } from 'react'
import commonView from '../../common/commonView'
import ToTopBtn from '../common/button/ToTopButton'
import repos from '../../utils/repos'
import { AUTH_APIS } from '../../utils/auth'
import LoadingModal from '../common/modal/LoadingModal'
import AlertList from '../common/alert/AlertList'
import ModalList from '../common/modal'
import CookiePolicyNotice from '../common/notice/CookiePolicyNotice'
import DollarPolicyNotice from '../common/notice/DollarPolicyNotice'
import Meta from '../../service/model/Meta'
import { useMain } from '../../redux/main/hooks'
import common from '../../common/common'
import _ from 'lodash'
import MainNotice from 'components/common/notice/MainNotice'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import UserDocumentFavorite from '../../graphql/queries/UserDocumentFavorite.graphql'
import UserInfo from '../../graphql/models/UserInfo'

export default function Layout(props): ReactElement {
  const {
    myInfo,
    setMyInfo,
    setTagList,
    setIsMobile,
    setIsTablet,
    // setModal
  } = useMain()

  const [init, setInit] = useState(false)
  const [scrollToTopValue, setScrollToTopValue] = useState(0)
  const [path] = useState(props.path)

  // 유저 정보 + 북마크 리스트를 GET 하여 REDUX에 저장합니다.
  useQuery(
    gql`
      ${UserDocumentFavorite}
    `,
    {
      context: {
        clientName: 'query'
      },
      variables: {
        userId: AUTH_APIS.isLogin() ? AUTH_APIS.getMyInfo().id : ''
      },
      skip: !AUTH_APIS.isLogin() || myInfo.bookmark.length !== 0,
      notifyOnNetworkStatusChange: false,
      onCompleted: data => {
        const dataList = _.values(data)

        if (!data || !dataList || dataList.length === 0) return setInit(true)

        const privateDocumentCount = dataList[2]
        const bookmarkList: string[] = []
        _.forEach(dataList[0].findMany, value =>
          bookmarkList.push(value.documentId)
        )

        let res = new UserInfo(dataList[1].findOne)

        if (!res.username || res.username === '') res.username = res.email
        if (!res.picture) res.picture = myInfo.picture

        res.privateDocumentCount = privateDocumentCount
        res.bookmark = bookmarkList
        setMyInfo(res)
      }
    }
  )

  if (AUTH_APIS.isLogin() && myInfo.username && !init) setInit(true)

  let _prevScrollPos = 0
  let isMobileChecker = false
  let isTabletChecker = false

  // 스크롤 이벤트 시 element 관리
  const handleScroll = () => {
    let currentScrollPos = window.pageYOffset
    let headerMainNav = document.getElementById('headerMainNav')
    let totalLoadingBar = document.getElementById('totalLoadingBar')
    let mainFloatingTag = document.getElementById('mainFloatingTag')
    let isScrollAtTop =
      currentScrollPos <= (commonView.getIsTablet() ? 90 : 130)
    let isScrollUp = _prevScrollPos > currentScrollPos

    // main 페이지 모바일, 스크롤 특정 비율 넘어갈시 tag 숨김
    if (!path && mainFloatingTag && commonView.getIsMobile()) {
      let isScrollHalfOver =
        Number(document.documentElement.scrollHeight / 1.2) <=
        Number(
          document.documentElement.clientHeight +
            document.documentElement.scrollTop
        )

      if (mainFloatingTag.style.display !== 'none' && isScrollHalfOver)
        mainFloatingTag.style.display = 'none'
      else if (mainFloatingTag.style.display !== 'block' && !isScrollHalfOver)
        mainFloatingTag.style.display = 'block'
    }

    // main 이외 페이지에서 헤더 숨김/표시 처리
    if (path && headerMainNav) {
      headerMainNav.style.marginBottom = '0px'
      headerMainNav.style.top = `${
        isScrollUp || isScrollAtTop
          ? '0'
          : `${commonView.getIsTablet() ? '-91' : '-131'}`
      }px`
    }

    // main 이외 페이지에서 로딩 숨김/표시 처리
    if (path && totalLoadingBar)
      totalLoadingBar.style.top = `${
        isScrollUp || isScrollAtTop
          ? `${commonView.getIsTablet() ? '90' : '130'}`
          : '0'
      }px`

    setScrollToTopValue(currentScrollPos)
    _prevScrollPos = currentScrollPos
  }

  // SET 태그 리스트
  const setTagListToStore = () =>
    repos.Document.getTagList('latest').then(result =>
      setTagList(
        _.chain(result.tagList)
          .sortBy([({ value }) => value])
          .reverse()
          .value()
      )
    )

  // 모바일 유무 REDUX SET
  const setIsMobileToRedux = (): void => {
    if (commonView.getIsMobile() !== isMobileChecker) {
      isMobileChecker = !isMobileChecker
      setIsMobile(commonView.getIsMobile())
    }
  }

  // 타블렛 유무 REDUX SET
  const setIsTabletToRedux = (): void => {
    if (commonView.getIsTablet() !== isTabletChecker) {
      isTabletChecker = !isTabletChecker
      setIsTablet(commonView.getIsTablet())
    }
  }

  const handleResize = (): void => {
    setIsMobileToRedux()
    setIsTabletToRedux()
  }

  // SET 이벤트 리스너
  const handleEventListener = (): void => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
  }

  useEffect(() => {
    repos.init().then(() => {
      // SET 모바일 유무
      void setTagListToStore()

      // SET 이벤트 리스너
      handleEventListener()

      // SET isMobile
      setIsMobileToRedux()

      // SET isTablet
      setIsTabletToRedux()

      // setModal('event')
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <a className={styles.l_skipLink} href="#article">
        Skip to main
      </a>

      {!path && <MainNotice />}

      <Header
        title={props.title}
        path={path}
        metaData={new Meta(props.metaData || null)}
      />

      {path && <CookiePolicyNotice />}

      {path && <DollarPolicyNotice />}

      {common.isServer() || init ? (
        <article className={styles.l_articleContainer} id="article">
          {props.children}
        </article>
      ) : (
        <LoadingModal />
      )}

      <Footer />

      <ModalList />

      <AlertList />

      <ToTopBtn prevScrollPos={scrollToTopValue} />

      <ReactTooltip />

      <div id="callbackIframeContainer" />
    </div>
  )
}
