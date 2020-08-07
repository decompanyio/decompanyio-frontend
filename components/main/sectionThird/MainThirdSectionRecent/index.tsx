import * as styles from 'public/static/styles/scss/index.scss'
import MainRecentItem from '../MainThirdSectionRecentItem'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import LatestDocumentCardHex from '../../../../graphql/queries/LatestDocumentCardHex.graphql'
import React, { ReactElement } from 'react'

export default function MainThirdSectionRecent(): ReactElement {
  const { loading, error, data } = useQuery(
    gql`
      ${LatestDocumentCardHex}
    `,
    {
      context: {
        clientName: 'query'
      },
      notifyOnNetworkStatusChange: false
    }
  )

  if (loading) return <div />
  if (error || !data) return <div />

  const dataList = data[Object.keys(data)[0]].findMany

  if (dataList.length === 0) return <div />

  return (
    <div className={styles.mr_wrapper}>
      <div className={styles.mr_container}>
        {dataList.map(({ userId, documentId, _id, accountId }, index) => (
          <div className={styles.mr_ListItemContainer} key={index}>
            <div className={styles.mr_dummy} />
            <MainRecentItem
              userId={userId || accountId}
              documentId={documentId || _id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
