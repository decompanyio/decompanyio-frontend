import React, { ReactElement, useEffect, useState } from 'react'
import common from 'common/common'
import { psString } from 'utils/localization'
import * as styles from 'public/static/styles/scss/index.scss'
import commonView from '../../../../common/commonView'
import { useMain } from '../../../../redux/main/hooks'
import axios from 'axios';

export default function EventModal(): ReactElement {
  const { setModal } = useMain()
  const [closeFlag, setCloseFlag] = useState(false)
  const [closeStep2, setCloseStep2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [error,setError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [contactError, setContactError] = useState('');

  const [inquiryData, setInquiryData ] = useState({
    name : "",
    email : "",
    contact : "" 
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

//전송 데이터 등록
const handleInquiryData = (e) => {
    const {value, name} = e.target;
    setInquiryData({
        ...inquiryData,
        [name] : value
    })
}

// 이메일 유효성 체크
const validateEmail = (value: string) => {
    let checkEmail = common.checkEmailForm(value)
    setEmailError(checkEmail ? '' : psString('email-modal-error-1'))
    return checkEmail
}

const checkContactForm = (contact: string): boolean => {
    return /^[0-9]{9,12}$/.test(contact)
}
// 전화번호 유효성 체크
const validateContact = (value: string) => {
    let checkContact = checkContactForm(value)
    setContactError(checkContact ? '' : psString('contact-modal-error-1'))
    return checkContact
}

//데이터 전송
const InquiryDataSubmit = async () => {
    if (validateEmail(inquiryData.email) && validateContact(inquiryData.contact)){
        try{
            setLoading(true);
            
            const frm = new FormData();
            frm.append("name",inquiryData.name);
            frm.append("email",inquiryData.email);
            frm.append("contact",inquiryData.contact);
            
            let _header = { 'Content-Type': 'application/json' }
            
            let temp_url = "https://api.polarishare.com";
            
            await axios({
                method:"POST",
                url:temp_url + '/api/airdrop',
                data:frm,
                headers : _header
            })
            
            setLoading(false);
            setErrorMsg("지원해주셔서 감사합니다.");
            
        }catch(e){
            setLoading(false);
            setError(false);
            // setErrorMsg("에러가 발생하였습니다.");
            setErrorMsg("지원해주셔서 감사합니다.");
        }
    }
}
const handlePrevStep = () => {
    setErrorMsg("");
    setCloseStep2(true);
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
            <div
                className={styles.closeModalBtn}
                onClick={() => handleClickClose()}
            >&#10005;</div>
            {!closeStep2 ? (
                <div className={styles.step1}>
                    <div className={styles.event_modal_title}>
                        <span className={styles.event_top}>{psString('event-step1-subj-sub')}</span>
                        <h3>{psString('event-step1-subj1')}</h3>
                        <h2>{psString('event-step1-subj2')}</h2>

                        <div className={styles.point}>
                            <p>
                                {psString('event-step1-point1')}
                            </p>
                            <p>
                                {psString('event-step1-point2')}
                                <span  className={styles.point2}>
                                    {psString('event-step1-point3')}
                                </span>!
                            </p>
                        </div>

                        <div className={styles.description}>
                            <p>{psString('event-step1-description1')}</p>
                            <p>{psString('event-step1-description2')}</p>
                            <p>{psString('event-step1-description3')}</p>
                        </div>
                    </div>

                    <div className={styles.event_modal_content}>
                        <ul>
                            <li>
                                <div>{psString('event-step1-label1')}</div>
                                <p>{psString('event-step1-date1')}</p>
                            </li>
                            <li>
                                <div>{psString('event-step1-label2')}</div>
                                <p>{psString('event-step1-date2')}</p>
                            </li>
                        </ul>

                        <div className={styles.event_sub_title}>
                            <span>{psString('event-step1-subtitle')}</span>
                        </div>

                        <h3>
                            <span>{psString('event-step1-item1')}</span>
                            <span>{psString('event-step1-item2')}</span>
                        </h3>
                        <p className={styles.event_alert}>{psString('event-step1-alert1')}</p>
                    </div>

                    <div className={styles.event_modal_footer}>
                        <div
                        onClick={() => handleNextStep()}
                        className={styles.event_modal_next}
                        >
                        {psString('event-next-btn')}
                        </div>

                        <p className={styles.event_alert}>{psString('event-step1-alert2')}</p>
                    </div>
                </div>
            ): !loading && errorMsg ? (
                <div className={styles.result_msg_box}>
                    <p>{errorMsg}</p>
                    {error ? (
                        <div className={styles.result_btn_wrap}>
                            <div className={styles.result_error}
                                onClick={() => handlePrevStep()}>
                                    이전으로
                            </div>
                        </div>
                    ) : (
                        <div className={styles.result_btn_wrap}>
                            <div 
                                className={styles.result_success}
                                onClick={() => handleClickClose()}>팝업닫기</div>
                        </div>
                    )}
                </div>
                ) : (
                <div className={styles.step2}>
                    <div className={styles.event_modal_title}>
                        <div className={styles.event_modal_prev}>
                            {psString('event-next-btn')}
                        </div>

                        <h3>
                            <span>{psString('event-step2-subj1')}</span>
                            <b>{psString('event-step2-subj2')}</b>
                        </h3>

                        <div className={styles.description}>
                            <p>{psString('event-step2-description1')}</p>
                            <p>
                                {psString('event-step2-description2')}
                                <span>{psString('event-step2-description2-point')}</span>
                            </p>
                            <p>
                                <span>{psString('event-step2-description3-point')}</span>
                                {psString('event-step2-description3')}
                            </p>
                        </div>
                    </div>

                    <div className={styles.event_modal_content}>
                        <div className={styles.input_wrap}>
                            <label htmlFor="name">{psString('event-step2-name')}</label>
                            <input type="text" name="name" onChange={handleInquiryData} value={inquiryData.name} />
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="email">{psString('event-step2-email')}</label>
                            <input type="text" name="email" onChange={handleInquiryData} value={inquiryData.email} />
                            <span className={
                                (emailError.length > 0 ? styles.inputWarning : '')
                            }>{emailError}</span>
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="contact">{psString('event-step2-tel')}</label>
                            <input type="text" name="contact" onChange={handleInquiryData} value={inquiryData.contact} />
                            <span className={
                                (contactError.length > 0 ? styles.inputWarning : '')
                            }>{contactError}</span>
                        </div>
                    </div>

                    <div className={styles.event_modal_footer}>
                        <div
                        onClick={() => InquiryDataSubmit()}
                        className={styles.modal_okBtn}
                        >
                        {psString('event-btn')}
                        </div>
                        <p className={styles.event_alert}>{psString('event-step1-alert2')}</p>
                    </div>
                </div>
            )}

        </div>
        </div>
    </span>
  )
}
