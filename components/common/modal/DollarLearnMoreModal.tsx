import React, { ReactElement, useEffect, useState } from 'react'
import common from 'common/common'
import { psString } from 'utils/localization'
import * as styles from '../../../public/static/styles/main.scss'
import commonView from '../../../common/commonView'
import { useMain } from '../../../redux/main/hooks'

export default function(): ReactElement {
  const { setModal } = useMain()
  const [closeFlag, setCloseFlag] = useState(false)

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () => Promise.resolve(setCloseFlag(true))

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => setModal(''))

  useEffect(() => {
    void commonView.setBodyStyleLock()
    return () => {
      void commonView.setBodyStyleUnlock()
    }
  }, [])

  return (
    <span>
      <div className={styles.modal_container}>
        <div className={styles.modal_wrapper} />
        <div
          className={
            styles.modal_body + ' ' + (closeFlag ? styles.modal_hide : '')
          }
        >
          <div className={styles.modal_title}>
            <h3>{psString('dollar-learn-others-subj')}</h3>
          </div>

          <div className={styles.modal_content}>
            {psString('dollar-learn-others-explain-1')}
            <br />
            <br />
            {psString('dollar-learn-others-explain-2')}
            <br />
            <br />
            {psString('dollar-learn-others-explain-3')}
          </div>

          <div className={styles.modal_footer}>
            <div
              onClick={() => handleClickClose()}
              className={styles.modal_okBtn}
            >
              {psString('dollar-learn-others-btn')}
            </div>
          </div>
        </div>
      </div>
    </span>
  )
}
