import * as styles from 'public/static/styles/main.scss'
import React, { ReactElement, useEffect } from 'react'
import ViewFullscreenBtn from './ViewFullscreenBtn'
import ViewInfoBox from './ViewInfoBox'
import ViewToolBox from './ViewToolBox'
import ViewDescBox from './ViewDescBox'
import dynamic from 'next/dist/next-server/lib/dynamic'
import commonView from '../../../common/commonView'
import commonData from '../../../common/commonData'
import { AUTH_APIS } from '../../../utils/auth'
import repos from '../../../utils/repos'
import { APP_CONFIG } from '../../../app.config'
import log from 'utils/log'
import { useMain } from '../../../redux/main/hooks'

interface ViewContainerProps {
  documentData
  ratio: number
  readPage: number
  text
}

// DocumentCard - No SSR
const ViewPdfWithoutSSR = dynamic(() => import('./ViewPdfViewer'), {
  ssr: false
})

export default function({
  documentData,
  ratio,
  readPage,
  text
}: ViewContainerProps): ReactElement {
  const { myInfo, setModal } = useMain()
  let stayTime = 0

  // Tracking API POST
  const postTracking = (page: number, type: string) =>
    repos.Tracking.getTrackingCollect({
      id: documentData.documentId,
      n: page + 1,
      ev: type
    }).then(res => res)

  // 로그인 시, cid ~ email 싱크 작업
  const postTrackingConfirm = async () => {
    let data = {
      email: myInfo.email,
      documentId: documentData.documentId
    }

    return repos.Tracking.postTrackingConfirm(data)
  }

  // 1. 로그인 유무 체크
  // 2-A. 로그인 시, '6번' 진행
  // 2-B. 비 로그인 시, '3번' 진행
  // 3. none / tracking / force tracking 문서 옵션 체크
  // 3-A. none 상태값으로 '6번' 진행
  // 3-B. tracking 상태값으로 '4번' 진행
  // 3-C. force tracking 상태값으로 '4번' 진행
  // 4. 이메일 모달 실행 및 응답 대기 후 모달 종료
  // 5-A. '4번' 이메일 미수집 시, '3-A번' 진행
  // 5-B. '4, 5번' 이메일 수집 시, '6번' 진행
  // 6. 트랙킹 진행

  // TODO page 값, 추후 유저가 직접 설정 계획.
  const checkQualified = (page: number) =>
    new Promise(resolve => {
      if (documentData.useTracking) {
        if (AUTH_APIS.isLogin()) {
          resolve('view')
        } else {
          if (page === 2) {
            let localStorageData = localStorage.getItem('refuse_tracking')

            if (
              localStorageData &&
              localStorageData === documentData.seoTitle
            ) {
              resolve('view')
            } else {
              setModal('email', { documentData })
            }
          } else {
            resolve('view')
          }
        }
      } else {
        resolve('none')
      }
    })

  // 특정 시간 동안 머문 후 트랙킹 시작
  const handleTrackingDelay = (page: number, type: string) => {
    let st = commonData.trackingDelayTime
    let tmpTime = Date.now()

    if (stayTime === 0 || (stayTime > 0 && tmpTime >= stayTime + st)) {
      return postTracking(page, type)
    }
  }

  // 뷰어 페이지 이동 관리
  const handlePageChange = (page: number) => {
    commonView.handleUrl(page, text[page])
    checkQualified(page).then((type: string) => handleTrackingDelay(page, type))
  }

  // 떠남 상태 관리
  const handleTrackingLeave = () => {
    try {
      return repos.Tracking.getTrackingCollect({
        id: documentData.documentId,
        n: -1,
        ev: 'leave'
      })
    } catch (e) {
      return console.error(e)
    }
  }

  useEffect(() => {
    log.ViewContainer.init()

    let page =
      commonView.getPageNum() > documentData.totalPages
        ? 0
        : commonView.getPageNum()

    if (AUTH_APIS.isLogin()) {
      void repos.Mutation.addHistory(documentData.documentId)

      postTrackingConfirm()
        .then(() =>
          checkQualified(page).then((type: string) => postTracking(page, type))
        )
        .catch(() =>
          APP_CONFIG.env === 'local'
            ? checkQualified(page).then((type: string) =>
                postTracking(page, type)
              )
            : false
        )
    } else {
      checkQualified(page).then((type: string) => postTracking(page, type))
    }
    return () => {
      handleTrackingLeave()
      localStorage.removeItem('refuse_tracking')
    }
  }, [])

  return (
    <div className={styles.common_container}>
      <ViewPdfWithoutSSR
        documentData={documentData}
        text={text}
        pageChange={handlePageChange}
        ratio={ratio}
        readPage={readPage}
      />
      <ViewFullscreenBtn
        documentData={documentData}
        readPage={readPage}
        ratio={ratio}
      />
      <ViewInfoBox documentData={documentData} />
      <ViewToolBox documentData={documentData} />
      <ViewDescBox documentData={documentData} />
      {/*<ViewSeeAlso documentData={documentData} />*/}
    </div>
  )
}
