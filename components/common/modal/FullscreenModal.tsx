import React, { ReactElement, useEffect, useState } from 'react'
import { FadingCircle } from 'better-react-spinkit'
import commonView from 'common/commonView'
import * as styles from 'public/static/styles/scss/index.scss'
import common from '../../../common/common'
import { useMain } from '../../../redux/main/hooks'
import DocumentInfo from '../../../service/model/DocumentInfo'

export default function(): ReactElement {
  const { modalData, myInfo, setModal } = useMain()

  const tempModalData = modalData as any
  const documentData = new DocumentInfo(
    tempModalData && tempModalData.documentData
      ? tempModalData.documentData
      : null
  )
  const ratio = tempModalData && tempModalData.ratio ? tempModalData.ratio : 1
  const readPage =
    tempModalData && tempModalData.readPage ? tempModalData.readPage : 1

  const [url, setUrl] = useState('')
  const [closeFlag, setCloseFlag] = useState(false)
  const thumbnailArr = new Array(documentData.totalPages)
  let page = 1

  // thumbnail 비율 portrait 여부
  const isPortrait = (): boolean =>
    window.screen.width / window.screen.height > ratio

  // 이전 페이지 GET
  const getPrevPage = (p: number): number => (p > 1 ? p - 1 : 1)

  // 다음 페이지 GET
  const getNextPage = (p: number): number =>
    p < thumbnailArr.length ? p + 1 : p

  // url SET
  const setImageData = (p: number): void => {
    page = p
    setUrl(thumbnailArr[p - 1])
  }

  // 썸네일 주소 배열 SET
  const setThumbAddr = () => {
    for (let i = 0; i < documentData.totalPages; i++) {
      thumbnailArr[i] = common.getThumbnail(
        documentData.documentId,
        2048,
        i + 1,
        ''
      )
    }
  }

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () =>
    new Promise(resolve => resolve(setCloseFlag(true)))

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () => handleCloseFlag().then(() => setModal(''))

  // 페이지 및 썸네일 관리
  const handelPageWithThumb = (action: string) => {
    switch (action) {
      case 'prev':
        return setImageData(getPrevPage(page))
      case 'next':
        return setImageData(getNextPage(page))
      case 'none':
        return setImageData(1)
      case 'set':
        return setImageData(readPage)
    }
  }

  // Keydown Event 관리
  const handleKeydown = e => {
    switch (e.keyCode) {
      case 27:
        return handleClickClose()
      case 37:
      case 38:
        return handelPageWithThumb('prev')
      case 32:
      case 13:
      case 39:
      case 40:
        return handelPageWithThumb('next')
    }
  }

  // 마우스 휠 관리
  const handleWheel = e => handelPageWithThumb(e.deltaY > 0 ? 'next' : 'prev')

  // 마우스 다운 관리
  const handleMousedown = _e => handelPageWithThumb('next')

  // 풀스크린 상태 관리
  const handleFullscreenChange = _e => {
    if (!document.fullscreenElement) {
      return handleClickClose()
    }
  }

  // 브라우저 fullscreen 관리
  const handleBrowserFullscreen = () => {
    if (document.fullscreenEnabled) {
      return document.documentElement.requestFullscreen()
    }
  }

  // SET 이벤트 리스너
  const handleEventListener = () => {
    window.addEventListener('wheel', handleWheel)
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('mousedown', handleMousedown)
    window.addEventListener('fullscreenchange', handleFullscreenChange)
  }

  useEffect(() => {
    commonView.setBodyStyleLock()

    handleEventListener()

    void handleBrowserFullscreen()

    setThumbAddr()

    handelPageWithThumb(readPage < 1 ? 'none' : 'set')

    return () => {
      commonView.setBodyStyleUnlock()

      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('mousedown', handleMousedown)
      window.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  return (
    <div
      className={
        styles.fm_fullscreenWrapper + ' ' + (closeFlag ? styles.modal_hide : '')
      }
    >
      <div className={styles.fm_onWrapper} />
      <div
        className={
          styles[
            'fm_thumbnailWrapper_' + (isPortrait() ? 'portrait' : 'landscape')
          ]
        }
      >
        {url ? (
          <img
            title={documentData.title}
            src={url}
            alt={documentData.title + '_' + url}
            data-small=""
            data-normal=""
            data-full=""
            className={
              documentData.forceTracking && !myInfo.email ? 'img-cloudy' : ''
            }
            onError={e => {
              let element = e.target as HTMLImageElement
              element.onerror = null
              element.src = require('public/logo.png')
            }}
          />
        ) : (
          <div className={styles.pc_loadingWrapper}>
            <FadingCircle color="#3681fe" />
          </div>
        )}
      </div>
    </div>
  )
}
