import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'

export default function MainNotice(): ReactElement {
  const [isShow, setIsShow] = useState(true)

  const handleShow = () => setIsShow(false)

  return (
    <div className={isShow ? styles.mn_show : ''}>
      <div className={styles.mn_dummy} />
      <div className={styles.mn_notifyTop}>
        <div className={styles.mn_notifyTopWrap}>
          폴라리스쉐어는 사용자가 파일형태로 저장하고 있는 지식이나 노하우를
          라이브러리라고 부르며, 라이브러리를 자유롭게 공유하고 보상받는 새로운
          개념의 플랫폼이다.
          <button type="button" onClick={() => handleShow()}>
            <span className={styles.mn_hide}>닫기</span>
          </button>
        </div>
      </div>
    </div>
  )
}
