import React, { ReactElement, useEffect, useState } from 'react'
import Truncate from 'react-truncate'
import { FadingCircle } from 'better-react-spinkit'
import * as styles from '../../../../../public/static/styles/main.scss'
import commonView from 'common/commonView'
import { psString } from 'utils/localization'
import common from 'common/common'
import { APP_CONFIG } from '../../../../../app.config'
import Link from 'next/link'
import repos from '../../../../../utils/repos'
import { AUTH_APIS } from '../../../../../utils/auth'
import RewardCard from '../../../../common/card/RewardCard'
import DocumentInfo from '../../../../../service/model/DocumentInfo'
import ProfileUploadClaim from './ProfileUploadClaim'
import { ProfileUploadTabItemProps } from '../../../../../typings/interfaces'
import { useMain } from '../../../../../redux/main/hooks'

export default function({
  documentData,
  idx,
  handleUploadSettings,
  viewerOptionOpenedIdx,
  owner
}: ProfileUploadTabItemProps): ReactElement {
  const { setAlertCode, setModal, myInfo, isMobile } = useMain()
  const [tmpDocumentData, setTmpDocumentData] = useState(
    new DocumentInfo(documentData)
  )
  const [rewardInfoOpen, setRewardInfo] = useState(false)
  const [reward, setReward] = useState(0)
  const [validClaimAmount, setValidClaimAmount] = useState(0)

  const downloadDocument = (documentId: string, documentName: string) =>
    repos.Document.getDocumentDownloadUrl({ documentId: documentId })
      .then(result => {
        const a = document.createElement('a')

        a.style.display = 'none'
        document.body.appendChild(a)
        a.href = result.downloadUrl
        a.setAttribute('download', documentName)
        a.click()

        window.URL.revokeObjectURL(a.href)
        document.body.removeChild(a)
      })
      .catch(err => console.error(err))

  const getCreatorRewards = () =>
    repos.Document.getClaimableRoyalty(documentData.documentId, myInfo.id).then(
      res => {
        // console.log(res)
        if (res.royalty > 0)
          setValidClaimAmount(Number(common.deckToDollar(res.royalty)))
      }
    )

  const getNDaysRoyalty = () =>
    repos.Document.getNDaysRoyalty(documentData.documentId, 7).then(res => {
      setReward(res)
    })

  const setStateDocumentData = state => {
    let _tmpDocumentData = state.tmpDocumentData
    _tmpDocumentData.state = state
    setTmpDocumentData(_tmpDocumentData)
  }

  const setRequiredForDownload = () => {
    if (!tmpDocumentData) {
      return setAlertCode(2091, {})
    }
    if (!AUTH_APIS.isLogin() && !myInfo.email) {
      return setAlertCode(2003, {})
    }

    const documentId = tmpDocumentData.documentId
    const documentName = tmpDocumentData.documentName

    return downloadDocument(documentId, documentName)
  }

  const handleConvertingState = () => {
    if (
      !owner ||
      !tmpDocumentData.state ||
      tmpDocumentData.state === 'CONVERT_COMPLETE'
    ) {
      return false
    }

    let interval = setInterval(() => {
      repos.Document.getDocument(tmpDocumentData.seoTitle)
        .then(res => {
          if (res && res.document.state === 'CONVERT_COMPLETE') {
            clearInterval(interval)
            setStateDocumentData(res.document.state)
            setAlertCode(2075, { title: tmpDocumentData.title })
          }
        })
        .catch(() => {
          clearInterval(interval)
          setAlertCode(2001, {})
        })
    }, 5000)
  }

  const handleShareBtnClick = () => setModal('share', { documentData })

  const handleDeleteBtnClick = () => setModal('delete', { documentData })

  const handlePublishBtnClick = () => setModal('publish', { documentData })

  useEffect(() => {
    handleConvertingState()
    void getNDaysRoyalty()
    if (owner) void getCreatorRewards()
  }, [])

  const vote = common.toEther(tmpDocumentData.latestVoteAmount) || 0
  let view = tmpDocumentData.latestPageview || 0
  let identification = tmpDocumentData.author.username

  return (
    <div className={styles.puti_container}>
      <div className={styles.puti_thumbWrapper}>
        {tmpDocumentData.state &&
        tmpDocumentData.state !== 'CONVERT_COMPLETE' ? (
          <div className={styles.puti_thumbLoading}>
            <div className={styles.puti_notConvertContainer}>
              <div className={styles.puti_notConvert}>
                <FadingCircle size={40} color="#3d5afe" />
              </div>
            </div>
          </div>
        ) : (
          <Link
            href={{
              pathname: '/contents_view',
              query: { seoTitle: tmpDocumentData.seoTitle }
            }}
            as={'/@' + identification + '/' + tmpDocumentData.seoTitle}
          >
            <div className={styles.puti_thumb}>
              <img
                src={common.getThumbnail(
                  tmpDocumentData.documentId,
                  isMobile ? 640 : 320,
                  1,
                  tmpDocumentData.documentName
                )}
                alt={
                  tmpDocumentData.title
                    ? tmpDocumentData.title
                    : tmpDocumentData.documentName
                }
                className={styles.puti_cardImg}
                onError={e => {
                  let element = e.target as HTMLImageElement
                  element.onerror = null
                  element.src =
                    APP_CONFIG.domain().static + '/image/logo-cut.png'
                }}
              />
            </div>
          </Link>
        )}
      </div>

      <div className={styles.puti_optionBtnWrapper}>
        {owner && (
          <div className={styles.puti_optionBtn}>
            <i
              className={
                'material-icons ' +
                (viewerOptionOpenedIdx === idx ? styles.puti_optionShow : '')
              }
              onClick={() => handleUploadSettings()}
            >
              more_vert
            </i>

            <div
              className={
                styles[
                  'puti_optionTable' +
                    (viewerOptionOpenedIdx === idx ? '' : 'Hide')
                ]
              }
              id={'optionTable' + idx}
            >
              {tmpDocumentData.state === 'CONVERT_COMPLETE' && (
                <div
                  className={styles.puti_optionTableBtn}
                  onClick={() => handleShareBtnClick()}
                >
                  <i className="material-icons">share</i>
                  {psString('share-modal-btn')}
                </div>
              )}
              {tmpDocumentData.state === 'CONVERT_COMPLETE' && (
                <div
                  className={styles.puti_optionTableBtn}
                  onClick={() => setRequiredForDownload()}
                >
                  <i className="material-icons">save_alt</i>
                  {psString('download-btn')}
                </div>
              )}

              {common.timeAgo(tmpDocumentData.created) > 0 && (
                <div
                  className={styles.puti_optionTableBtn}
                  onClick={() => handleDeleteBtnClick()}
                >
                  <i className="material-icons">delete</i>
                  {psString('common-modal-delete')}
                </div>
              )}
            </div>
          </div>
        )}
        {tmpDocumentData.desc &&
        tmpDocumentData.state === 'CONVERT_COMPLETE' ? (
          <Link
            href={{
              pathname: '/contents_view',
              query: { seoTitle: tmpDocumentData.seoTitle }
            }}
            as={'/@' + identification + '/' + tmpDocumentData.seoTitle}
          >
            <div className={styles.puti_title}>
              {tmpDocumentData.title
                ? tmpDocumentData.title
                : tmpDocumentData.documentName}
            </div>
          </Link>
        ) : (
          <div className={styles.puti_title}>
            {tmpDocumentData.title
              ? tmpDocumentData.title
              : tmpDocumentData.documentName}
          </div>
        )}

        <div className={styles.puti_descWrapper}>
          {tmpDocumentData.desc &&
          tmpDocumentData.state === 'CONVERT_COMPLETE' ? (
            <Link
              href={{
                pathname: '/contents_view',
                query: { seoTitle: tmpDocumentData.seoTitle }
              }}
              as={'/@' + identification + '/' + tmpDocumentData.seoTitle}
            >
              <div className={styles.puti_desc}>
                <Truncate lines={2} ellipsis={<span>...</span>}>
                  {
                    <span className={styles.tdi_text}>
                      {tmpDocumentData.desc}
                    </span>
                  }
                </Truncate>
              </div>
            </Link>
          ) : (
            <div className={styles.puti_desc}>
              <Truncate lines={2} ellipsis={<span>...</span>}>
                {
                  <span className={styles.tdi_text}>
                    {tmpDocumentData.desc}
                  </span>
                }
              </Truncate>
            </div>
          )}
        </div>

        <div className={styles.puti_infoWrapper}>
          <span
            className={styles.puti_reward}
            onMouseOver={() => setRewardInfo(true)}
            onMouseOut={() => setRewardInfo(false)}
          >
            $ {common.deckToDollarWithComma(reward)}
            <img
              className={styles.puti_arrow}
              src={
                APP_CONFIG.domain().static + '/image/icon/i_arrow_down_blue.svg'
              }
              alt="arrow button"
            />
          </span>

          {reward > 0 && rewardInfoOpen && (
            <RewardCard reward={reward} documentData={tmpDocumentData} />
          )}
          <span className={styles.puti_view}>{view}</span>
          <span className={styles.puti_vote}>{common.deckStr(vote)}</span>
          <div className={styles.puti_date}>
            {commonView.dateTimeAgo(tmpDocumentData.created, isMobile)}
          </div>

          {owner && validClaimAmount > 0 && (
            <div className={styles.puti_claimWrapper}>
              <ProfileUploadClaim
                documentData={tmpDocumentData}
                validClaimAmount={validClaimAmount}
              />
            </div>
          )}

          {!tmpDocumentData.isPublic &&
            tmpDocumentData.state === 'CONVERT_COMPLETE' && (
              <div className={styles.puti_publishBtnWrapper}>
                <p
                  data-tip={psString('tooltip-publish')}
                  className={styles.puti_publishBtn}
                  onClick={() => handlePublishBtnClick()}
                >
                  {psString('common-modal-publish')}
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}
