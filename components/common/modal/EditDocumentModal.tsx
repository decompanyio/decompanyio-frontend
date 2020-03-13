import React, { ReactElement, useEffect, useState } from "react";
import { FadingCircle } from 'better-react-spinkit'
import { psString } from 'utils/localization'
import TagsInput from 'react-tagsinput'
import { useSelector, useDispatch } from 'react-redux'
import Router from 'next/router'

import { APP_CONFIG } from '../../../app.config'
import { setActionMain } from '../../../redux/reducer/main'
import repos from '../../../utils/repos'
import commonView from '../../../common/commonView'
import common from '../../../common/common'
import * as styles from '../../../public/static/styles/main.scss'
import AutoCompleteRenderInput from '../input/AutoCompleteRenderInput'

export default function(): ReactElement {
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

  // 제목 유효성 체크
  const validateTitle = (value: string): boolean => {
    setTitleError(value.length > 0 ? '' : psString('edit-doc-error-1'))
    return value.length > 0
  }

  // 태그 유효성 체크
  const validateTag = (tags): boolean => {
    setTagError(tags.length > 0 ? '' : psString('edit-doc-error-2'))
    return tags.length > 0
  }

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

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => dispatch(setActionMain.modal(null)))

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

  // 확인 버튼 관리
  const handleConfirmBtn = (): void => {
    // input 값 유효성 검사
    if (validateTitle(title) && validateTag(tags)) {
      setLoading(true)
      handleConfirm()
    }
  }

  // 제목 변경 관리
  const handleTitleChange = (e): void => {
    if (validateTitle(e.target.value)) setTitle(e.target.value)
  }

  // 태그 변경 관리
  const handleTagChange = (tags): void => {
    setTags(tags)
    validateTag(tags)
  }

  // 설명 변경 관리
  const handleDescChange = e => setDesc(e.target.value)

  // 유저 트래킹 체크박스
  const handleTrackingCheckbox = (): void => {
    let newValue = !useTracking
    setUseTracking(newValue)
    if (!newValue) setForceTracking(false)
  }

  // 강제 트래킹 체크박스
  const handleForceTrackingCheckbox = (): void => {
    let newValue = !forceTracking
    setForceTracking(newValue)
  }

  // 다운로드 허용 체크박스
  const handleAIsDownloadCheckbox = (): void => {
    let newValue = !isDownload
    setIsDownload(newValue)
  }

  // CC License by 체크박스
  const handleCcByCheckbox = (): void => setBy(!by)

  // CC License nc 체크박스
  const handleCcNcCheckbox = (): void => setNc(!nc)

  // CC License nd 체크박스
  const handleCcNdCheckbox = (): void => setNd(!nd)

  // CC License sa 체크박스
  const handleCcSaCheckbox = (): void => setSa(!sa)

  // more 옵션 관리 버튼
  const handleMoreOptions = (): void => setMoreOptions(!moreOptions)

  useEffect(() => {
    getCcDetailValue(documentData.cc)
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
          <h3>{psString('edit-doc-subj')}</h3>
        </div>

        <div className={styles.modal_content}>
          <div className={styles.modal_subject}>
            {psString('common-modal-title')}
          </div>
          <input
            type="text"
            placeholder={psString('title-placeholder')}
            id="docTitle"
            className={
              styles.common_input +
              ' ' +
              (titleError.length > 0 ? styles.common_inputWarning : '')
            }
            value={title}
            onChange={(e): void => handleTitleChange(e)}
          />
          <span>{titleError}</span>

          <div className={styles.modal_subject}>
            {psString('common-modal-description')}
          </div>
          <textarea
            id="docDesc"
            value={desc}
            placeholder={psString('description-placeholder')}
            onChange={(e): void => handleDescChange(e)}
            className={styles.modal_textArea}
          />

          <div className={styles.modal_subject}>
            {psString('common-modal-tag')}
          </div>
          {tags && (
            <TagsInput
              id="tags"
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
              onClick={(): void => handleMoreOptions()}
            >
              {psString('common-modal-more-option')}
              <img
                className={styles.edm_rewardArrow}
                src={
                  APP_CONFIG.domain().static +
                  '/image/icon/i_arrow_' +
                  (moreOptions ? 'down_grey.svg' : 'up_grey.png')
                }
                alt="arrow button"
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
                    type="checkbox"
                    id="useTrackingCheckboxEdit"
                    onChange={(): void => handleTrackingCheckbox()}
                    checked={useTracking}
                  />

                  <label htmlFor="useTrackingCheckboxEdit">
                    <span>
                      <i className="material-icons">done</i>
                    </span>
                    {psString('doc-option-1')}
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="forceTrackingCheckboxEdit"
                    onChange={(): void => handleForceTrackingCheckbox()}
                    checked={useTracking ? forceTracking : false}
                    disabled={!useTracking}
                  />
                  <label htmlFor="forceTrackingCheckboxEdit">
                    <span>
                      <i className="material-icons">done</i>
                    </span>
                    {psString('doc-option-2')}
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="allowDownloadEdit"
                    checked={isDownload}
                    onChange={(): void => handleAIsDownloadCheckbox()}
                  />
                  <label htmlFor="allowDownloadEdit">
                    <span>
                      <i className="material-icons">done</i>
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
                    type="checkbox"
                    id="ccByCheckboxEdit"
                    onChange={(): void => handleCcByCheckbox()}
                    checked={by}
                  />
                  <label htmlFor="ccByCheckboxEdit">
                    <span>
                      <i className="material-icons">done</i>
                    </span>
                    Attribution
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="ccNcCheckboxEdit"
                    onChange={(): void => handleCcNcCheckbox()}
                    checked={!by ? false : nc}
                    disabled={!by}
                  />
                  <label htmlFor="ccNcCheckboxEdit">
                    <span>
                      <i className="material-icons">done</i>
                    </span>
                    Noncommercial
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="ccNdCheckboxEdit"
                    onChange={(): void => handleCcNdCheckbox()}
                    checked={!by || sa ? false : nd}
                    disabled={!by || sa}
                  />
                  <label htmlFor="ccNdCheckboxEdit">
                    <span>
                      <i className="material-icons">done</i>
                    </span>
                    No Derivative Works
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="ccSaCheckboxEdit"
                    onChange={(): void => handleCcSaCheckbox()}
                    checked={!by || nd ? false : sa}
                    disabled={!by || nd}
                  />
                  <label htmlFor="ccSaCheckboxEdit">
                    <span>
                      <i className="material-icons">done</i>
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
            onClick={(): void => handleConfirmBtn()}
            className={
              styles.modal_okBtn + ' ' + (loading && styles.common_disabledBtn)
            }
          >
            {loading && (
              <div className={styles.edm_loadingWrapper}>
                <FadingCircle color="#3681fe" size={17} />
              </div>
            )}
            {psString('common-modal-confirm')}
          </div>
        </div>
      </div>
    </div>
  )
}
