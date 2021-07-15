import React, { ReactElement, useEffect, useState } from 'react'
import common from 'common/common'
import { psString } from 'utils/localization'
import * as styles from 'public/static/styles/scss/index.scss'
import commonView from '../../../../common/commonView'
import { useMain } from '../../../../redux/main/hooks'

export default function EventModal(): ReactElement {
  const { setModal } = useMain()
  const [closeFlag, setCloseFlag] = useState(false)
  const [closeStep2, setCloseStep2] = useState(false);

  const [inquiryData, setInquiryData ] = useState({
    name : "",
    email : "",
    tel : "" 
  });

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () => Promise.resolve(setCloseFlag(true))

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => setModal(''))

//다음 모달창 표시
const handleNextStep = () => {
    setCloseStep2(true);
}

const handleInquiryData = (e) => {
    const {value, name} = e.target;
    setInquiryData({
        ...inquiryData,
        [name] : value
    })
}

  useEffect(() => {
    void commonView.setBodyStyleLock()
    return () => {
      void commonView.setBodyStyleUnlock()
    }
  }, [])

  return (
    <span>
      <div className={styles.modal_container}>
        <div
          className={
            styles.modal_body + ' ' + (closeFlag ? styles.modal_hide : '')
          }
        >
            {!closeStep2 ? (
                <div className={styles.step1}>
                    <div className={styles.event_modal_title}>
                        <span>{psString('event-step1-subj-sub')}</span>
                        <h3>{psString('event-step1-subj')}</h3>
                    </div>

                    <div className={styles.event_modal_content}>
                        <p className={styles.point}>{psString('event-step1-point')}</p>

                        <div className={styles.description}>
                            {psString('event-step1-description')}
                        </div>
                        <ul>
                            <li>{psString('event-step1-ul-list1')}</li>
                            <li>{psString('event-step1-ul-list2')}</li>
                            <li>{psString('event-step1-ul-list3')}</li>
                        </ul>

                        <span>{psString('event-step1-ul2-point')}</span>
                        <ul>
                            <li>{psString('event-step1-ul2-list1')}</li>
                            <li>{psString('event-step1-ul2-list2')}</li>
                            <li>{psString('event-step1-ul2-list3')}</li>
                        </ul>

                        <p className={styles.alert}>{psString('event-step1-alert1')}</p>
                        <p className={styles.alert}>{psString('event-step1-alert2')}</p>
                    </div>

                    <div className={styles.event_modal_footer}>
                        <div
                        onClick={() => handleNextStep()}
                        className={styles.event_modal_next}
                        >
                        {psString('event-next-btn')}
                        </div>
                    </div>
                </div>
            ): (
                <div className={styles.step2}>
                    <div className={styles.event_modal_title}>
                        <div
                            className={styles.event_modal_prev}
                        >
                            {psString('event-next-btn')}
                        </div>
                    </div>

                    <div className={styles.event_modal_content}>
                        <p className={styles.point}>{psString('event-step2-point')}</p>
                        <div className={styles.description}>{psString('event-step2-description')}</div>

                        <div className={styles.input_wrap}>
                            <label htmlFor="name">{psString('event-step2-name')}</label>
                            <input type="text" name="name" onChange={handleInquiryData} value={inquiryData.name} />
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="email">{psString('event-step2-email')}</label>
                            <input type="text" name="email" onChange={handleInquiryData} value={inquiryData.email} />
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="tel">{psString('event-step2-tel')}</label>
                            <input type="text" name="tel" onChange={handleInquiryData} value={inquiryData.tel} />
                        </div>
                    </div>

                    <div className={styles.event_modal_footer}>
                        <div
                        onClick={() => handleClickClose()}
                        className={styles.modal_okBtn}
                        >
                        {psString('event-btn')}
                        </div>
                    </div>
                </div>
            )}

        </div>
        </div>
    </span>
  )
}
