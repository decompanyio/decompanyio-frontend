import { ProfileContainerProps } from '../../../typings/interfaces'
import React, { ReactElement } from 'react'
import ProfileSummary from '../ProfileSummary'
import ProfileTab from '../ProfileTab'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import UserProfileInfo from '../../../graphql/queries/UserProfileInfo.graphql'
import UserInfo from '../../../graphql/models/UserInfo'
import NotFoundPage from '../../page/NotFoundPage'
import * as styles from 'public/static/styles/scss/index.scss'

export default function ProfileContainer({
  identifier,
  owner
}: ProfileContainerProps): ReactElement {
  const { loading, error, data } = useQuery(
    gql`
      ${UserProfileInfo}
    `,
    {
      variables: {
        username: identifier || ''
      },
      notifyOnNetworkStatusChange: false
    }
  )

  if (loading || error || !data) return <div />

  const profileInfo = new UserInfo(data[Object.keys(data)[0]].findOne)

  if (!profileInfo.email) return <NotFoundPage />

  return (
    <div>
      <div className={styles.ps_dummy} />

      {owner !== -1 && (
        <ProfileSummary profileInfo={profileInfo} owner={owner === 1} />
      )}
      {owner !== -1 && (
        <ProfileTab profileInfo={profileInfo} owner={owner === 1} />
      )}
    </div>
  )
}
