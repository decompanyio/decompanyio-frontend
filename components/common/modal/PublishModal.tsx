import React, { ReactElement, useEffect, useState } from 'react'
import { FadingCircle } from 'better-react-spinkit'
import TagsInput from 'react-tagsinput'
import repos from 'utils/repos'
import { psString } from 'utils/localization'
import common from 'common/common'
import commonView from 'common/commonView'
import { APP_CONFIG } from '../../../app.config'
import * as styles from '../../../public/static/styles/main.scss'
import AutoCompleteRenderInput from '../input/AutoCompleteRenderInput'
import { useMain } from '../../../redux/main/hooks'
import DocumentInfo from '../../../service/model/DocumentInfo'

export default function(): ReactElement {
  const { modalData, tagList, setModal, setAlertCode } = useMain()

  const tempModalData = modalData as any
  const documentData = new DocumentInfo(
    tempModalData && tempModalData.documentData
      ? tempModalData.documentData
      : null
  )
  const [by, setBy] = useState(false)
  const [nc, setNc] = useState(false)
  const [nd, setNd] = useState(false)
  const [sa, setSa] = useState(false)
  const [loading, setLoading] = useState(false)
  const [moreOptions, setMoreOptions] = useState(false)
  const [closeFlag, setCloseFlag] = useState(false)
  const [tags, setTags] = useState(documentData.tags || [])
  const [tagError, setTagError] = useState('')
  const [useTracking, setUseTracking] = useState(
    documentData.useTracking || false
  )
  const [forceTracking, setForceTracking] = useState(
    documentData.forceTracking || false
  )
  const [isDownload, setIsDownload] = useState(documentData.isDownload || false)

  // 태그 유효성 체크
  const validateTag = tags => {
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
      .then(() => setModal(''))

  // 태그 변경 관리
  const handleTagChange = tags => {
    setTags(tags)
    validateTag(tags)
  }

  // publish 관리
  const handlePublish = () =>
    repos.Document.publishDocument({
      isPublic: true,
      documentId: documentData.documentId,
      tags: tags,
      useTracking: useTracking,
      forceTracking: !useTracking ? false : forceTracking,
      isDownload: isDownload,
      cc: getCcValue()
    })

  // 출판 버튼 클릭 관리
  const handleClickPublish = () => {
    if (!validateTag(tags)) return false
    setLoading(true)
    handlePublish()
      // 퍼블리시 완료 모달 오픈
      .then(() => setModal('publishComplete', { documentData }))
      .catch(err => {
        console.error(err)
        setAlertCode(2071, {})
        setModal('')
      })
  }

  // 유저 트래킹 체크박스
  const handleTrackingCheckbox = () => {
    let newValue = !useTracking
    setUseTracking(newValue)
    if (!newValue) return setForceTracking(false)
    return
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
          <h3>{psString('publish-modal-title')}</h3>
        </div>

        <div className={styles.modal_content}>
          <div className={styles.pm_desc}>
            {psString('publish-modal-desc-1')}
          </div>
          <div className={styles.modal_subject}>
            {psString('common-modal-tag')}
          </div>
          {tags && (
            <TagsInput
              id="tags"
              renderInput={getAutoCompleteRenderInput}
              className={
                'react-tagsinput ' +
                (tagError.length > 0 ? styles.pm_tagInputWarning : '')
              }
              value={tags}
              onChange={handleTagChange}
              validate={false}
              onlyUnique
            />
          )}
          <span> {tagError}</span>

          <div className={styles.pm_moreBtnWrapper}>
            <div className={styles.pm_moreBtnLine} />
            <div
              className={styles.pm_moreBtn}
              onClick={() => handleMoreOptions()}
            >
              {psString('common-modal-more-option')}
              <img
                className={styles.pm_rewardArrow}
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
              <div className={styles.pm_moreContainer_1}>
                <div>
                  <input
                    type="checkbox"
                    id="useTrackingCheckboxEdit"
                    onChange={() => handleTrackingCheckbox()}
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
                    onChange={() => handleForceTrackingCheckbox()}
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
                    onChange={() => handleAIsDownloadCheckbox()}
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
              <div className={styles.pm_moreContainer_2}>
                <div>
                  <input
                    type="checkbox"
                    id="ccByCheckboxEdit"
                    onChange={() => handleCcByCheckbox()}
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
                    onChange={() => handleCcNcCheckbox()}
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
                    onChange={() => handleCcNdCheckbox()}
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
                    onChange={() => handleCcSaCheckbox()}
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
            onClick={() => handleClickPublish()}
            className={
              styles.modal_okBtn + ' ' + (loading && styles.common_disabledBtn)
            }
          >
            {loading && (
              <div className={styles.pm_loadingWrapper}>
                <FadingCircle color="#3681fe" size={17} />
              </div>
            )}
            {psString('publish-modal-publish-btn')}
          </div>
        </div>
      </div>
    </div>
  )
}
