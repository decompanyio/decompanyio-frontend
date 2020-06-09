import * as styles from 'public/static/styles/main.scss'
import React, { ReactElement, useEffect } from 'react'
import ViewFullscreenBtn from './ViewFullscreenBtn'
import ViewInfoBox from './ViewInfoBox'
import ViewToolBox from './ViewToolBox'
import ViewDescBox from './ViewDescBox'
import commonView from '../../../common/commonView'
import commonData from '../../../common/commonData'
import { AUTH_APIS } from '../../../utils/auth'
import repos from '../../../utils/repos'
import { APP_CONFIG } from '../../../app.config'
import { useMain } from '../../../redux/main/hooks'
import ViewPdfViewer from './ViewPdfViewer'
import { ViewContainerProps } from '../../../typings/interfaces'

let stayTime = 0

export default function({
  documentData,
  ratio,
  readPage,
  text
}: ViewContainerProps): ReactElement {
  const { myInfo, setModal } = useMain()

  // TODO page 값, 추후 유저가 직접 설정 계획.
  const checkQualified = (page: number) =>
    new Promise(resolve => {
      // tracking 상태값 체크
      if (!documentData.useTracking) return resolve('none')

      // 로그인 유무 체크
      if (AUTH_APIS.isLogin()) return resolve('view')

      // 페이지 1쪽 체크
      if (page !== 2) return resolve('view')

      // 이메일 모달 취소 체크
      if (localStorage.getItem('refuse_tracking') === documentData.seoTitle)
        return resolve('view')

      // 이메일 모달 출력
      // 모달 확인/취소 선택 후, checkQualified() 재시작
      return setModal('email', { documentData })
    })

  // Tracking API POST
  const postTracking = (page: number, type: string, documentId: string) => {
    stayTime = Date.now()

    return repos.Tracking.getTrackingCollect({
      id: documentId,
      n: page + 1,
      ev: type
    }).then(res => res)
  }

  // 트랙킹 관련 쿠키 값과 이메일 값을 맵핑합니다.
  const postTrackingConfirm = (page: number, documentId: string) =>
    repos.Tracking.postTrackingConfirm({
      email: myInfo.email,
      documentId: documentId
    })
      .then(() =>
        checkQualified(page).then((type: string) =>
          postTracking(page, type, documentId)
        )
      )
      .catch(() =>
        APP_CONFIG.env === 'local'
          ? checkQualified(page).then((type: string) =>
              postTracking(page, type, documentId)
            )
          : false
      )

  // 뷰어 페이지 이동 관리
  const handlePageChange = (page: number) => {
    const { documentId } = documentData

    commonView.handleUrl(page, text[page])

    checkQualified(page).then((type: string) => {
      if (
        stayTime === 0 ||
        (stayTime > 0 && Date.now() >= stayTime + commonData.trackingDelayTime)
      )
        return postTracking(page, type, documentId)
    })
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
    const { documentId, totalPages } = documentData

    let page =
      commonView.getPageNum() > totalPages ? 0 : commonView.getPageNum()

    if (AUTH_APIS.isLogin()) {
      void repos.Mutation.addHistory(documentId)
      void postTrackingConfirm(page, documentId)
    } else
      checkQualified(page).then((type: string) =>
        postTracking(page, type, documentId)
      )

    return () => {
      handleTrackingLeave()
      localStorage.removeItem('refuse_tracking')
    }
  }, [])

  return (
    <div className={styles.common_container}>
      <ViewPdfViewer
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
