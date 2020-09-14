import React, { ReactElement, useEffect, useState } from 'react'
import { APP_CONFIG } from '../../../../app.config'
import common from 'common/common'
import commonView from 'common/commonView'
import { psString } from 'utils/localization'
import * as styles from 'public/static/styles/scss/index.scss'
import { useMain } from '../../../../redux/main/hooks'
import DocumentInfo from '../../../../service/model/DocumentInfo'

export default function ShareModal(): ReactElement {
  const { modalData, setModal, setAlertCode } = useMain()

  const tempModalData = modalData as any
  const documentData = new DocumentInfo(
    tempModalData && tempModalData.documentData
      ? tempModalData.documentData
      : null
  )
  const type = tempModalData && tempModalData.type ? tempModalData.type : ''

  const [closeFlag, setCloseFlag] = useState(false)
  const [urlData, setUrlData] = useState({
    url: '',
    embedUrl: '',
    embed: ''
  })

  // 임베트 태그 GET
  const getEmbed = url =>
    '<iframe src="' +
    url +
    '" title="embed" width="640" height="360" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no" allowFullScreen/>'

  // URL 셋팅
  const setUrl = (): void => {
    let url = documentData.shortUrl
    let embedTag = getEmbed(url)
    let embedUrl = APP_CONFIG.domain().embed + documentData.seoTitle

    setUrlData({ url: url, embedUrl: embedUrl, embed: embedTag })
  }

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () =>
    new Promise(resolve => resolve(setCloseFlag(true)))

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => setModal(''))

  // 복사 관리
  const handleCopy = (id: string): void => {
    let copyUrl = document.getElementById(id) as HTMLInputElement

    if (id && copyUrl) {
      copyUrl.select()
      document.execCommand('copy')
      setAlertCode(2005, {})

      let icon1 = document.getElementById('icon-1') as HTMLElement
      let icon2 = document.getElementById('icon-2') as HTMLElement
      let icon3 = document.getElementById('icon-3') as HTMLElement

      if (copyUrl.nextElementSibling && copyUrl.nextElementSibling.firstChild) {
        copyUrl.nextElementSibling.firstChild.textContent = 'done'
      }

      icon1.innerText = 'file_copy'
      icon2.innerText = 'file_copy'
      icon3.innerText = 'file_copy'
    } else {
      setAlertCode(2007, {})
    }
  }

  useEffect(() => {
    setUrl()
    commonView.setBodyStyleLock()

    return () => {
      commonView.setBodyStyleUnlock()
    }
  }, [])

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_wrapper} />
      <div
        className={
          styles.modal_body + ' ' + (closeFlag ? styles.modal_hide : '')
        }
      >
        <div className={styles.modal_title}>
          <i
            className={'material-icons ' + styles.modal_closeBtn}
            onClick={() => handleClickClose()}
          >
            close
          </i>
          <h3>{psString('share-modal-title')}</h3>
        </div>

        <div className={styles.modal_content}>
          <div className={styles.sm_title}>{psString('copy-short-url')}</div>
          <div className={styles.sm_inputWrapper}>
            <input
              type="text"
              value={urlData.url}
              id="copyInput"
              readOnly
              className={styles.sm_input}
            />
            <div
              className={styles.sm_copy}
              onClick={() => handleCopy('copyInput')}
            >
              <i className="material-icons" id="icon-1">
                file_copy
              </i>
            </div>
          </div>

          <div className={styles.sm_title}>{psString('copy-embed-url')}</div>
          <div className={styles.sm_inputWrapper}>
            <input
              type="text"
              value={urlData.embedUrl}
              id="copyEmbedUrlInput"
              readOnly
              className={styles.sm_input}
            />
            <div
              className={styles.sm_copy}
              onClick={() => handleCopy('copyEmbedUrlInput')}
            >
              <i className="material-icons" id="icon-2">
                file_copy
              </i>
            </div>
          </div>

          <div className={styles.sm_title}>Embed {'</>'}</div>
          <div className={styles.sm_inputWrapper}>
            <textarea
              value={urlData.embed}
              id="copyEmbedInput"
              readOnly
              className={styles.modal_textArea}
            />
            <div
              className={styles.sm_copy}
              onClick={() => handleCopy('copyEmbedInput')}
            >
              <i className="material-icons" id="icon-3">
                file_copy
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
