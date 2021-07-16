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
            
            let temp_url = "https://polarishare.com";
            
            await axios({
                method:"POST",
                url:temp_url + '/airdrop',
                data:frm
            })
            
            setLoading(false);
            setErrorMsg("지원해주셔서 감사합니다.");
            
        }catch(e){
            setLoading(false);
            setError(true);
            setErrorMsg("에러가 발생하였습니다.");

            console.log("error is >> ",e);
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

                        <span className={styles.sub_point}>{psString('event-step1-ul2-point')}</span>
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
                            <span className={
                                styles.em_input +
                                ' ' +
                                (emailError.length > 0 ? styles.em_inputWarning : '')
                            }>{emailError}</span>
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="contact">{psString('event-step2-tel')}</label>
                            <input type="text" name="contact" onChange={handleInquiryData} value={inquiryData.contact} />
                            <span className={
                                styles.em_input +
                                ' ' +
                                (contactError.length > 0 ? styles.em_inputWarning : '')
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
                    </div>
                </div>
            )}

        </div>
        </div>
    </span>
  )
}
