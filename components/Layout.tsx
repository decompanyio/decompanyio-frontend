import ReactTooltip from 'react-tooltip'
import * as styles from 'public/static/styles/main.scss'
import Header from './header/Header'
import Footer from './footer/Footer'
import React, { ReactElement, useEffect, useState } from 'react'
import commonView from '../common/commonView'
import ToTopBtn from './common/button/ToTopBtn'
import repos from '../utils/repos'
import { AUTH_APIS } from '../utils/auth'
import log from '../utils/log'
import LoadingModal from './common/modal/LoadingModal'
import AlertList from './common/alert/AlertList'
import ModalList from './common/modal/ModalList'
import commonData from '../common/commonData'
import CookiePolicyNotice from './common/notice/CookiePolicyNotice'
import DollarPolicyNotice from './common/notice/DollarPolicyNotice'
import Meta from '../service/model/Meta'
import UserInfo from '../service/model/UserInfo'
import { useMain } from '../redux/main/hooks'

export default function(props): ReactElement {
  const {
    modalCode,
    myInfo,
    setMyInfo,
    setModal,
    setTagList,
    setIsMobile
  } = useMain()

  const [init, setInit] = useState(false)
  const [scrollToTopValue, setScrollToTopValue] = useState(0)
  const [path] = useState(props.path)

  let _prevScrollPos = 0
  let awayTime: number // 자리비움 시간
  let t: number // 1 min
  let isMobileChecker = false

  // 스크롤 이벤트 시 element 관리
  const manageElement = (path: string) =>
    new Promise(resolve => {
      let currentScrollPos = window.pageYOffset
      let headerMainNav = document.getElementById('headerMainNav')
      let totalLoadingBar = document.getElementById('totalLoadingBar')
      let headerCategoryWrapper = document.getElementById(
        'headerCategoryWrapper'
      )

      // main 이외 페이지에서 헤더 숨길/표시 처리
      if (path && headerMainNav) {
        headerMainNav.style.marginBottom = '0px'
        if (_prevScrollPos > currentScrollPos || currentScrollPos <= 60) {
          headerMainNav.style.top = '0px'
        } else {
          headerMainNav.style.top = '-61px'
        }
      }

      // main 이외 페이지에서 헤더 숨길/표시 처리
      if (path && totalLoadingBar) {
        if (_prevScrollPos > currentScrollPos || currentScrollPos <= 60) {
          totalLoadingBar.style.top = '60px'
        } else {
          totalLoadingBar.style.top = '0px'
        }
      }

      // main 페이지, 테그 헤더 위치 처리
      if (!path && headerCategoryWrapper && headerMainNav) {
        if (headerCategoryWrapper.offsetTop < currentScrollPos) {
          if (headerCategoryWrapper.style.position !== 'fixed') {
            headerCategoryWrapper.style.position = 'fixed'
          }
          if (
            headerCategoryWrapper.style.borderBottom !== '1px solid #b3b3b3'
          ) {
            headerCategoryWrapper.style.borderBottom = '1px solid #b3b3b3'
          }
          if (headerCategoryWrapper.style.marginBottom !== '45px') {
            headerMainNav.style.marginBottom = '45px'
          }
        }
        if (headerMainNav.offsetTop + 60 >= currentScrollPos) {
          if (headerCategoryWrapper.style.position !== 'relative') {
            headerCategoryWrapper.style.position = 'relative'
          }
          if (headerCategoryWrapper.style.marginBottom !== '0px') {
            headerMainNav.style.marginBottom = '0px'
          }
        }
      }

      resolve(currentScrollPos)
    })

  // 내 정보 REDUX SET
  const setMyInfoToStore = () => {
    if (AUTH_APIS.isLogin() && myInfo.email.length === 0) {
      return repos.Account.getAccountInfo().then(result => {
        let res = new UserInfo(result.user)
        if (!res.username || res.username === '') res.username = res.email
        if (!res.picture) res.picture = myInfo.picture

        res.privateDocumentCount = result.privateDocumentCount
        setMyInfo(res)
        log.Layout.setMyInfo()
        return Promise.resolve()
      })
    } else {
      return Promise.resolve()
    }
  }

  // SET 태그 리스트
  const setTagListToStore = () =>
    repos.Document.getTagList('latest')
      .then(result => setTagList(result.tagList))
      .catch(err => log.Layout.setTagList(err))
      .then(() => log.Layout.setTagList(false))

  // 자리비움 시간 SET
  const setAwayTime = (): void => {
    if (awayTime > 0) awayTime = 0
    if (modalCode === 'away') setModal('')
  }

  // 모바일 유무 REDUX SET
  const setIsMobileToRedux = (): void => {
    if (commonView.getIsMobile() !== isMobileChecker) {
      isMobileChecker = !isMobileChecker
      setIsMobile(commonView.getIsMobile())
      log.Layout.setIsMobile()
    }
  }

  const handleScroll = () =>
    manageElement(path).then((currentScrollPos: number) => {
      setScrollToTopValue(currentScrollPos)
      _prevScrollPos = currentScrollPos
    })
  const handleResize = (): void => setIsMobileToRedux()
  const handleKeydown = (): void => setAwayTime()
  const handleMousemove = (): void => setAwayTime()

  // SET 이벤트 리스너
  const handleEventListener = (): void => {
    window.addEventListener('scroll', handleScroll)
    log.Layout.handleScroll()

    window.addEventListener('resize', handleResize)
    log.Layout.handleResize()

    window.addEventListener('keydown', handleKeydown)
    log.Layout.handleKeydown()

    window.addEventListener('mousemove', handleMousemove)
    log.Layout.handleMousemove()
  }

  useEffect(() => {
    log.Layout.init()
    awayTime = 0 // 자리비움 시간
    t = commonData.awayCheckTime

    repos.init().then(() => {
      // SET 모바일 유무
      void setTagListToStore()

      // SET 이벤트 리스너
      handleEventListener()

      // SET isMobile
      setIsMobileToRedux()

      // SET myInfo
      setMyInfoToStore().then((): void => setInit(true))
    })

    // Check Away Time
    let interval = setInterval(() => {
      awayTime = awayTime + t

      if (awayTime >= t * 15 && modalCode !== 'away') setModal('away')
    }, t)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      log.Layout.handleScrollEnd()

      window.removeEventListener('resize', handleResize)
      log.Layout.handleResizeEnd()

      window.removeEventListener('keydown', handleKeydown)
      log.Layout.handleKeydownEnd()

      window.removeEventListener('mousemove', handleMousemove)
      log.Layout.handleMousemoveEnd()

      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <Header
        title={props.title}
        path={path}
        metaData={new Meta(props.metaData || null)}
      />

      <CookiePolicyNotice />

      <DollarPolicyNotice />

      {init ? (
        <article className={styles.l_articleContainer}>
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
