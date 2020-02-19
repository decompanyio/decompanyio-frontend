import React, { useEffect, useState } from 'react'
import { FadingCircle } from 'better-react-spinkit'
import { psString } from 'utils/localization'
import TagsInput from 'react-tagsinput'
import { useSelector, useDispatch } from 'react-redux'
import Router from 'next/router'

import { APP_CONFIG } from '../../../app.config'
import { setActionMain } from '../../../redux/reducer/main'
import repos from '../../../utils/repos'
import common_view from '../../../common/common_view'
import common from '../../../common/common'
import * as styles from '../../../public/static/styles/main.scss'
import AutoCompleteRenderInput from '../input/AutoCompleteRenderInput'

export default function() {
  const dispatch = useDispatch()
  const { documentData } = useSelector(state => state.main.modalData)
  const tagList = useSelector(state => state.main.tagList)
  const [by, setBy] = useState(false)
  const [nc, setNc] = useState(false)
  const [nd, setNd] = useState(false)
  const [sa, setSa] = useState(false)
  const [moreOptions, setMoreOptions] = useState(false)
  const [loading, setLoading] = useState(false)
  const [closeFlag, setCloseFlag] = useState(false)
  const [title, setTitle] = useState(documentData.title)
  const [titleError, setTitleError] = useState('')
  const [tags, setTags] = useState(documentData.tags || [])
  const [tagError, setTagError] = useState('')
  const [desc, setDesc] = useState(documentData.desc)
  const [useTracking, setUseTracking] = useState(
    documentData.useTracking || false
  )
  const [forceTracking, setForceTracking] = useState(
    documentData.forceTracking || false
  )
  const [isDownload, setIsDownload] = useState(documentData.isDownload || false)

  // 자동 완성 태그 GET
  const getAutoCompleteRenderInput = ({ addTag, ...props }) => {
    return (
      <AutoCompleteRenderInput addTag={addTag} tagList={tagList} {...props} />
    )
  }

  // CC 값 GET
  const getCcValue = () => {
    if (!by) return 'none'

    if (!nc && !nd && !sa) return 'by'
    else if (nc && !nd && !sa) return 'by-nc'
    else if (!nc && nd && !sa) return 'by-nd'
    else if (!nc && !nd && sa) return 'by-sa'
    else if (nc && !nd && sa) return 'by-nc-sa'
    else if (nc && nd && !sa) return 'by-nc-nd'
  }

  // CC 상세값 GET
  const getCcDetailValue = cc => {
    if (!cc || cc === '' || cc === 'none') return 'none'

    // by, by-nc, by-nd, by-sa, by-nc-sa, by-nc-nd
    return new Promise(resolve => {
      setBy(true)
      setNc(cc === 'by-nc' || cc === 'by-nc-sa' || cc === 'by-nc-nd')
      setNd(cc === 'by-nd' || cc === 'by-nc-nd')
      setSa(cc === 'by-sa' || cc === 'by-nc-sa')
      resolve()
    })
  }

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () =>
    new Promise(resolve => resolve(setCloseFlag(true)))

  // 확인 버튼 관리
  const handleConfirmBtn = () => {
    // input 값 유효성 검사
    if (!validateTitle(title) || !validateTag(tags)) return false

    setLoading(true)
    handleConfirm()
  }

  // 확인 관리
  const handleConfirm = () => {
    const data = {
      documentId: documentData.documentId,
      desc: desc,
      title: title,
      tags: tags,
      useTracking: useTracking,
      forceTracking: !useTracking ? false : forceTracking,
      isDownload: isDownload,
      cc: getCcValue()
    }

    const identification = documentData.author
      ? documentData.author.username && documentData.author.username.length > 0
        ? documentData.author.username
        : documentData.author.email
      : documentData.accountId

    repos.Document.updateDocument(data).then((result: any) => {
      setLoading(false)
      void handleClickClose()
      return Router.push(
        {
          pathname: '/contents_view'
        },
        '/@' + identification + '/' + result.seoTitle
      )
    })
  }

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => dispatch(setActionMain.modal(null)))

  // 제목 변경 관리
  const handleTitleChange = e => {
    if (validateTitle(e.target.value)) setTitle(e.target.value)
  }

  // 태그 변경 관리
  const handleTagChange = tags => {
    setTags(tags)
    validateTag(tags)
  }

  // 설명 변경 관리
  const handleDescChange = e => setDesc(e.target.value)

  // 유저 트래킹 체크박스
  const handleTrackingCheckbox = () => {
    let newValue = !useTracking
    setUseTracking(newValue)
    if (!newValue) setForceTracking(false)
  }

  // 강제 트래킹 체크박스
  const handleForceTrackingCheckbox = () => {
    let newValue = !forceTracking
    setForceTracking(newValue)
  }

  // 다운로드 허용 체크박스
  const handleAIsDownloadCheckbox = () => {
    let newValue = !isDownload
    setIsDownload(newValue)
  }

  // CC License by 체크박스
  const handleCcByCheckbox = () => setBy(!by)

  // CC License nc 체크박스
  const handleCcNcCheckbox = () => setNc(!nc)

  // CC License nd 체크박스
  const handleCcNdCheckbox = () => setNd(!nd)

  // CC License sa 체크박스
  const handleCcSaCheckbox = () => setSa(!sa)

  // more 옵션 관리 버튼
  const handleMoreOptions = () => setMoreOptions(!moreOptions)

  // 제목 유효성 체크
  const validateTitle = (value: string) => {
    setTitleError(value.length > 0 ? '' : psString('edit-doc-error-1'))
    return value.length > 0
  }

  // 태그 유효성 체크
  const validateTag = tags => {
    setTagError(tags.length > 0 ? '' : psString('edit-doc-error-2'))
    return tags.length > 0
  }

  useEffect(() => {
    getCcDetailValue(documentData.cc)
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
          <h3>{psString('edit-doc-subj')}</h3>
        </div>

        <div className={styles.modal_content}>
          <div className={styles.modal_subject}>
            {psString('common-modal-title')}
          </div>
          <input
            type='text'
            placeholder={psString('title-placeholder')}
            id='docTitle'
            className={
              styles.common_input +
              ' ' +
              (titleError.length > 0 ? styles.common_inputWarning : '')
            }
            value={title}
            onChange={e => handleTitleChange(e)}
          />
          <span>{titleError}</span>

          <div className={styles.modal_subject}>
            {psString('common-modal-description')}
          </div>
          <textarea
            id='docDesc'
            value={desc}
            placeholder={psString('description-placeholder')}
            onChange={e => handleDescChange(e)}
            className={styles.modal_textArea}
          />

          <div className={styles.modal_subject}>
            {psString('common-modal-tag')}
          </div>
          {tags && (
            <TagsInput
              id='tags'
              renderInput={getAutoCompleteRenderInput}
              className={
                'react-tagsinput ' +
                (tagError.length > 0 ? styles.edm_tagInputWarning : '')
              }
              value={tags}
              onChange={handleTagChange}
              validate={false}
              onlyUnique
            />
          )}
          <span> {tagError}</span>

          <div className={styles.edm_moreBtnWrapper}>
            <div className={styles.edm_moreBtnLine} />
            <div
              className={styles.edm_moreBtn}
              onClick={() => handleMoreOptions()}
            >
              {psString('common-modal-more-option')}
              <img
                className={styles.edm_rewardArrow}
                src={
                  APP_CONFIG.domain().static +
                  '/image/icon/i_arrow_' +
                  (moreOptions ? 'down_grey.svg' : 'up_grey.png')
                }
                alt='arrow button'
              />
            </div>
          </div>

          {moreOptions && (
            <div>
              <div className={styles.modal_subject}>
                {psString('common-modal-option')}
              </div>
              <div className={styles.edm_moreContainer_1}>
                <div>
                  <input
                    type='checkbox'
                    id='useTrackingCheckboxEdit'
                    onChange={() => handleTrackingCheckbox()}
                    checked={useTracking}
                  />

                  <label htmlFor='useTrackingCheckboxEdit'>
                    <span>
                      <i className='material-icons'>done</i>
                    </span>
                    {psString('doc-option-1')}
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='forceTrackingCheckboxEdit'
                    onChange={() => handleForceTrackingCheckbox()}
                    checked={useTracking ? forceTracking : false}
                    disabled={!useTracking}
                  />
                  <label htmlFor='forceTrackingCheckboxEdit'>
                    <span>
                      <i className='material-icons'>done</i>
                    </span>
                    {psString('doc-option-2')}
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='allowDownloadEdit'
                    checked={isDownload}
                    onChange={() => handleAIsDownloadCheckbox()}
                  />
                  <label htmlFor='allowDownloadEdit'>
                    <span>
                      <i className='material-icons'>done</i>
                    </span>
                    {psString('doc-option-3')}
                  </label>
                </div>
              </div>

              <div className={styles.modal_subject}>
                {psString('edit-cc-license')}
              </div>
              <div className={styles.edm_moreContainer_2}>
                <div>
                  <input
                    type='checkbox'
                    id='ccByCheckboxEdit'
                    onChange={() => handleCcByCheckbox()}
                    checked={by}
                  />
                  <label htmlFor='ccByCheckboxEdit'>
                    <span>
                      <i className='material-icons'>done</i>
                    </span>
                    Attribution
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='ccNcCheckboxEdit'
                    onChange={() => handleCcNcCheckbox()}
                    checked={!by ? false : nc}
                    disabled={!by}
                  />
                  <label htmlFor='ccNcCheckboxEdit'>
                    <span>
                      <i className='material-icons'>done</i>
                    </span>
                    Noncommercial
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='ccNdCheckboxEdit'
                    onChange={() => handleCcNdCheckbox()}
                    checked={!by || sa ? false : nd}
                    disabled={!by || sa}
                  />
                  <label htmlFor='ccNdCheckboxEdit'>
                    <span>
                      <i className='material-icons'>done</i>
                    </span>
                    No Derivative Works
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='ccSaCheckboxEdit'
                    onChange={() => handleCcSaCheckbox()}
                    checked={!by || nd ? false : sa}
                    disabled={!by || nd}
                  />
                  <label htmlFor='ccSaCheckboxEdit'>
                    <span>
                      <i className='material-icons'>done</i>
                    </span>
                    Share Alike
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.modal_footer}>
          <div
            onClick={() => handleClickClose()}
            className={styles.modal_cancelBtn}
          >
            {psString('common-modal-cancel')}
          </div>
          <div
            onClick={() => handleConfirmBtn()}
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
