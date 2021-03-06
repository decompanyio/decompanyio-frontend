import React, { ReactElement, useEffect, useState } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share'
import commonView from '../../../../common/commonView'
import { APP_CONFIG } from '../../../../app.config'
import { psString } from 'utils/localization'
import common from 'common/common'
import * as styles from 'public/static/styles/scss/index.scss'
import { useMain } from '../../../../redux/main/hooks'
import DocumentInfo from '../../../../service/model/DocumentInfo'

export default function PublishComplete(): ReactElement {
  const { modalData, setModal, setAlertCode } = useMain()

  const tempModalData = modalData as any
  const documentData = new DocumentInfo(
    tempModalData && tempModalData.documentData
      ? tempModalData.documentData
      : null
  )

  const [closeFlag, setCloseFlag] = useState(false)
  const [copyBtnText, setCopyBtnText] = useState(
    psString('publish-modal-complete-copy-url')
  )

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () =>
    new Promise(resolve => resolve(setCloseFlag(true)))

  // 종료 버튼 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => setModal(''))

  // 복사 버튼 텍스트 SET
  const handleCopyBtnText = () =>
    setCopyBtnText(psString('publish-modal-complete-copied'))

  // 복사 버튼 관리
  const handleCopyBtnClick = id =>
    commonView
      .clipboardCopy(id)
      .then(() => setAlertCode(2005, {}))
      .then(() => handleCopyBtnText())
      .catch(() => setAlertCode(2007, {}))

  useEffect(() => {
    commonView.setBodyStyleLock()

    return () => {
      commonView.setBodyStyleUnlock()
      document.location.reload()
    }
  }, [])

  let ogUrl = APP_CONFIG.domain().embed + documentData.seoTitle

  return (
    <div className={styles.modal_container}>
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
          <h3>{psString('publish-modal-complete-title')}</h3>
        </div>

        <div className={styles.modal_content}>
          <div className={styles.pcm_subject}>
            {psString('publish-modal-complete-explain')}
          </div>
          <div className={styles.pcm_subject}>
            {psString('publish-modal-complete-subject')}
          </div>

          <div className={styles.pcm_sns}>
            <LinkedinShareButton url={ogUrl} className={styles.pcm_snsBtn}>
              <div className={styles.pcm_snsIcon}>
                <img
                  src={
                    APP_CONFIG.domain().static +
                    '/image/sns/color/ic_sns_linkedin_color.png'
                  }
                  alt="linkedin sns icon"
                />
                {psString('viewer-page-sns-linkedin')}
              </div>
            </LinkedinShareButton>
          </div>

          <div className={styles.pcm_sns}>
            <FacebookShareButton url={ogUrl} className={styles.pcm_snsBtn}>
              <div className={styles.pcm_snsIcon}>
                <img
                  src={
                    APP_CONFIG.domain().static +
                    '/image/sns/color/ic_sns_facebook_color.png'
                  }
                  alt="facebook sns icon"
                />
                {psString('viewer-page-sns-fb')}
              </div>
            </FacebookShareButton>
          </div>

          <div className={styles.pcm_sns}>
            <TwitterShareButton url={ogUrl} className={styles.pcm_snsBtn}>
              <div className={styles.pcm_snsIcon}>
                <img
                  src={
                    APP_CONFIG.domain().static +
                    '/image/sns/color/ic_sns_twitter_color.png'
                  }
                  alt="twitter sns icon"
                />
                {psString('viewer-page-sns-twitter')}
              </div>
            </TwitterShareButton>
          </div>

          <div
            className={styles.pcm_sns}
            onClick={() => handleCopyBtnClick('publishModalCompleteCopyDummy')}
          >
            {copyBtnText}
            <input
              type="text"
              className={styles.pcm_dummy}
              readOnly
              id="publishModalCompleteCopyDummy"
              value={documentData.shortUrl}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
