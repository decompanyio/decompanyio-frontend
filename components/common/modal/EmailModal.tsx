import { FadingCircle } from 'better-react-spinkit'
import { psString } from 'utils/localization'
import repos from '../../../utils/repos'
import common from 'common/common'
import commonView from '../../../common/commonView'
import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from '../../../public/static/styles/main.scss'
import Router from 'next/router'
import { useMain } from '../../../redux/main/hooks'
import DocumentInfo from '../../../service/model/DocumentInfo'

export default function(): ReactElement {
  const { modalData, setModal } = useMain()

  const tempModalData = modalData as any
  const documentData = new DocumentInfo(
    tempModalData && tempModalData.documentData
      ? tempModalData.documentData
      : null
  )
  const [closeFlag, setCloseFlag] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [policyChecked, setPolicyChecked] = useState(false)
  const [policyError, setPolicyError] = useState(false)

  const identification = documentData.author
    ? documentData.author.username && documentData.author.username.length > 0
      ? documentData.author.username
      : documentData.author.email
    : documentData.accountId

  // 이메일 유효성 체크
  const validateEmail = (value: string) => {
    let checkEmail = common.checkEmailForm(value)
    setEmailError(checkEmail ? '' : psString('email-modal-error-1'))
    return checkEmail
  }

  // 체크박스 유효성 체크
  const validateCheckBox = (value: boolean) => {
    if (value) {
      setPolicyError(false)
      return true
    } else {
      setPolicyError(true)
      return false
    }
  }

  // usetracking: true, forcetracking: false 로컬스토리지 데이터 셋
  const setLocalstorage = () =>
    Promise.resolve(
      localStorage.setItem('refuse_tracking', documentData.seoTitle)
    )

  // 라우팅 관리
  const handleRouter = (page: number) =>
    Router.push(
      {
        pathname: '/contents_view',
        query: { seoTitle: documentData.seoTitle }
      },
      '/@' + identification + '/' + documentData.seoTitle + '/' + page
    )

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () => Promise.resolve(setCloseFlag(true))

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => setModal(''))
      .then(() => setLocalstorage())
      .then(() => handleRouter(3))

  // 메일 입력 성공 후 관리
  const handleSuccessClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => setModal(''))
      .then(() => handleRouter(3))

  // 강제입력 시 모달 종료 관리
  const handleBack = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => setModal(''))
      .then(() => handleRouter(1))

  // 메일 입력 체크
  const handleEmailChange = e => {
    if (validateEmail(e.target.value)) setEmail(e.target.value)
  }

  // 보내기 버튼 클릭 시
  const handleSendBtn = async () => {
    if (validateEmail(email) && validateCheckBox(policyChecked)) {
      setLoading(true)
      let data = {
        email: email,
        documentId: documentData.documentId
      }

      await repos.Tracking.postTrackingConfirm(data).then((): void => {
        setLoading(false)
        handleSuccessClose()
      })
    }
  }

  // 체크박스 관리
  const handleCheckbox = e => {
    setPolicyChecked(e.target.checked)
    validateCheckBox(e.target.checked)
  }

  useEffect(() => {
    commonView.setBodyStyleLock()

    return () => {
      commonView.setBodyStyleUnlock()
      setModal('')
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
          <h3>
            {documentData.forceTracking === true
              ? psString('email-modal-subj-1')
              : psString('email-modal-subj-2')}
          </h3>
        </div>

        <div className={styles.modal_content}>
          <div className={styles.modal_subject}>
            {psString('email-modal-explain-1')}
          </div>
          <input
            type="text"
            placeholder="Email"
            autoComplete="off"
            className={
              styles.common_input +
              ' ' +
              (emailError.length > 0 ? styles.common_inputWarning : '')
            }
            onChange={e => handleEmailChange(e)}
          />
          <span>{emailError}</span>
        </div>

        <div
          className={
            styles.em_checkboxContainer +
            ' ' +
            (policyError ? styles.em_checkboxWarning : '')
          }
        >
          <input
            type="checkbox"
            id="termsCheckbox"
            onClick={e => handleCheckbox(e)}
          />
          <label htmlFor="termsCheckbox">
            <span>
              <i className="material-icons">done</i>
            </span>
            {psString('email-modal-explain-2') + ' '}
            <a
              className={styles.em_policyLink}
              target="_blank"
              href={'/legal/policy.html'}
              rel="noopener noreferrer"
            >
              {psString('email-modal-explain-3')}
            </a>
          </label>
        </div>

        <div className={styles.modal_footer}>
          {documentData.forceTracking ? (
            <div
              onClick={() => handleBack()}
              className={styles.modal_cancelBtn}
            >
              {psString('email-modal-btn-cancel-2')}
            </div>
          ) : (
            <div
              onClick={() => handleClickClose()}
              className={styles.modal_cancelBtn}
            >
              {psString('email-modal-btn-cancel-1')}
            </div>
          )}
          <div onClick={() => handleSendBtn()} className={styles.modal_okBtn}>
            {loading && (
              <div className={styles.em_loadingWrapper}>
                <FadingCircle color="#3681fe" size={17} />
              </div>
            )}
            {psString('email-modal-btn-ok')}
          </div>
        </div>
      </div>
    </div>
  )
}
