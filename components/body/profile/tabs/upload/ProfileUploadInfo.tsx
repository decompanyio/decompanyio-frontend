import React, { ReactElement, useState } from 'react'
import * as styles from '../../../../../public/static/styles/main.scss'
import common from '../../../../../common/common'
import { APP_CONFIG } from '../../../../../app.config'
import RewardCard from '../../../../common/card/RewardCard'
import commonView from '../../../../../common/commonView'
import ProfileUploadClaim from './ProfileUploadClaim'
import { useMain } from '../../../../../redux/main/hooks'
import { ProfileUploadInfoProps } from '../../../../../typings/interfaces'
import ProfilePublishBtn from './ProfilePublishBtn'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import UploadDocumentInfo from '../../../../../graphql/queries/UploadDocumentInfo.graphql'
import DocumentInfoWithClaimableRoyalty from '../../../../../graphql/queries/DocumentInfoWithClaimableRoyalty.graphql'
import DocumentFeaturedModel from '../../../../../graphql/models/DocumentFeatured'
import DocumentPopularModel from '../../../../../graphql/models/DocumentPopular'
import CreatorRoyalty from '../../../../../graphql/models/CreatorRoyalty'
import _ from 'lodash'

export default function({
  documentData,
  owner,
  convertState
}: ProfileUploadInfoProps): ReactElement {
  const { isMobile } = useMain()
  const [rewardInfoOpen, setRewardInfo] = useState(false)

  const { loading, error, data } = useQuery(
    gql`
      ${owner ? DocumentInfoWithClaimableRoyalty : UploadDocumentInfo}
    `,
    {
      context: {
        clientName: 'query'
      },
      variables: {
        documentId_scalar: documentData.documentId,
        documentId: documentData.documentId,
        days: 7
      },
      notifyOnNetworkStatusChange: false
    }
  )

  if (error) return <div />

  let _data = {
    Creator: {},
    DocumentFeatured: {},
    DocumentPopular: {}
  }

  if (!loading)
    _.chain(data)
      .forOwn((v, k) => {
        let arr = _.values(v)
        _data[k] =
          arr[arr.length - 1] === 'QueryCreator' ? [arr[0], arr[1]] : arr[0]
      })
      .value()

  const { Creator, DocumentFeatured, DocumentPopular } = _data

  const { latestVoteAmount } = new DocumentFeaturedModel(DocumentFeatured)
  const documentPopular = new DocumentPopularModel(DocumentPopular)
  const { royalty } = new CreatorRoyalty(Creator[0])
  const claimableRoyalty = Number(
    common.deckToDollar(_.sumBy(Creator[1], ({ royalty }) => royalty))
  )

  const vote = common.toEther(latestVoteAmount) || 0
  let view = documentPopular.latestPageview || 0

  return (
    <div className={styles.puti_infoWrapper}>
      <span
        className={styles.puti_reward}
        onMouseOver={() => setRewardInfo(true)}
        onMouseOut={() => setRewardInfo(false)}
      >
        $ {common.deckToDollarWithComma(royalty)}
        <img
          className={styles.puti_arrow}
          src={APP_CONFIG.domain().static + '/image/icon/i_arrow_down_blue.svg'}
          alt="arrow button"
        />
      </span>

      {royalty > 0 && rewardInfoOpen && (
        <RewardCard reward={royalty} documentData={documentData} />
      )}
      <span className={styles.puti_view}>{view}</span>
      <span className={styles.puti_vote}>{common.deckStr(vote)}</span>
      <div className={styles.puti_date}>
        {commonView.dateTimeAgo(documentData.created, isMobile)}
      </div>

      <ProfileUploadClaim
        documentData={documentData}
        validClaimAmount={claimableRoyalty}
        owner={owner}
      />

      <ProfilePublishBtn
        documentData={documentData}
        convertState={convertState}
      />
    </div>
  )
}
