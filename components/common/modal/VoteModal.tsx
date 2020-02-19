import React, { useEffect, useState } from 'react'
import { FadingCircle } from 'better-react-spinkit'
import { useDispatch, useSelector } from 'react-redux'
import common from 'common/common'
import common_view from 'common/common_view'
import { psString } from 'utils/localization'
import { setActionMain } from '../../../redux/reducer/main'
import repos from '../../../utils/repos'
import * as styles from '../../../public/static/styles/main.scss'

export default function() {
  const dispatch = useDispatch()
  const myInfo = useSelector(state => state.main.myInfo)
  const { documentData } = useSelector(state => state.main.modalData)
  const [loading, setLoading] = useState(false)
  const [closeFlag, setCloseFlag] = useState(false)
  const [balance, setBalance] = useState(-1)
  const [deposit, setDeposit] = useState(0)
  const [voteAmount, setVoteAmount] = useState({
    myVoteAmount: 0,
    totalVoteAmount: 0
  })
  const [deckError, setDeckError] = useState('')
  // Deck 예금 값 입력 캐치
  const onChangeDeposit = e => {
    setDeposit(e.target.value)
    return validateDeposit(e.target.value)
  }

  // 예금 값 유효성 체크
  const validateDeposit = (value: number) => {
    return new Promise(resolve => {
      let errMsg = ''
      if (value <= 0) errMsg = psString('vote-modal-err-1')
      else if (value > Number(common.toDeck(balance).toFixed(2))) {
        errMsg = psString('vote-modal-err-2')
      }
      setDeckError(errMsg)
      resolve(errMsg)
    })
  }

  // 투표 Confirm 버튼 클릭
  const onClickVote = async () => {
    if (balance <= 0) return
    let v = await validateDeposit(deposit)
    if (v === '') return onVoteDocument()
  }

  // 투표 POST
  const onVoteDocument = () => {
    setLoading(true)

    let data = {
      documentId: documentData.documentId,
      amount: deposit
    }

    repos.Wallet.voteDocument(data).then(() => {
      setLoading(false)
      window.location.reload()
    })
  }

  // 문서 투표액 GET
  const getDocumentVoteAmount = () => {
    repos.Document.getDocumentVoteAmount({
      userId: myInfo.sub,
      documentId: documentData.documentId
    }).then(res =>
      setVoteAmount({
        myVoteAmount: common.toDeck(res.myVoteAmount),
        totalVoteAmount: common.toDeck(res.totalVoteAmount)
      })
    )
  }

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () =>
    new Promise(resolve => resolve(setCloseFlag(true)))

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => dispatch(setActionMain.modal(null)))

  // 키 다운 관리
  const handleKeyDown = e => {
    if (e.keyCode === 13) return onClickVote()
  }

  // 밸런스 정보 GET
  const handleBalance = () => {
    if (balance >= 0) return false

    return repos.Wallet.getWalletBalance({
      userId: myInfo._id
    }).then(res => setBalance(res.wei))
  }

  useEffect(() => {
    handleBalance()
    getDocumentVoteAmount()

    common_view.setBodyStyleLock()

    return () => {
      common_view.setBodyStyleUnlock()
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
          <h3>{psString('vote-modal-title')}</h3>
        </div>

        <div className={styles.modal_content}>
          <div className={styles.modal_subject}>
            {psString('vote-modal-subj-1')}
          </div>
          <ul className={styles.vm_list}>
            <li>
              <strong>{psString('vote-modal-you')} : </strong>
              {voteAmount.myVoteAmount} DECK
            </li>
            <li>
              <strong>{psString('vote-modal-total')} : </strong>
              {voteAmount.totalVoteAmount} DECK
            </li>
          </ul>

          <div className={styles.modal_subject}>
            {psString('vote-modal-subj-2')}
          </div>
          <ul className={styles.vm_list}>
            <li>
              <span className={styles.vm_deckAmount}>
                {common.toDeck(balance).toFixed(2)}
              </span>
              DECK ($
              <span className={styles.vm_dollarAmount}>
                {common
                  .weiToDollar(balance)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              )
            </li>
          </ul>

          <div className={styles.modal_subject}>
            {psString('vote-modal-subj-3')}
          </div>
          <input
            type='number'
            placeholder='DECK'
            autoComplete='off'
            id='deposit'
            className={
              styles.common_input +
              ' ' +
              (deckError.length > 0 ? styles.common_inputWarning : '')
            }
            onChange={e => onChangeDeposit(e)}
            onKeyDown={e => handleKeyDown(e)}
          />
          <span>{deckError}</span>

          <p className={styles.vm_note}>{psString('vote-modal-note')}</p>
        </div>

        <div className={styles.modal_footer}>
          <div
            onClick={() => handleClickClose()}
            className={styles.modal_cancelBtn}
          >
            {psString('common-modal-cancel')}
          </div>
          <div
            onClick={() => onClickVote()}
            className={
              styles.modal_okBtn + ' ' + (loading && styles.common_disabledBtn)
            }
          >
            {loading && (
              <div className={styles.edm_loadingWrapper}>
                <FadingCircle color='#3681fe' size={17} />
              </div>
            )}
            {psString('common-modal-confirm')}
          </div>
        </div>
      </div>
    </div>
  )
}
