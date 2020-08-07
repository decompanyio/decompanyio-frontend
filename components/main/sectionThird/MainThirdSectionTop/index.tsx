import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import MainTopListItem from '../MainThirdSectionTopItem'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import PopularDocumentTop from '../../../../graphql/queries/PopularDocumentTop.graphql'

export default function MainThirdSectionTop(): ReactElement {
  const { loading, error, data } = useQuery(
    gql`
      ${PopularDocumentTop}
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
    <div className={styles.mfrs_container}>
      <h3>TOP 5</h3>

      <div className={styles.mfrs_list}>
        {dataList.map(
          ({ userId, documentId, _id, accountId }, index) =>
            (documentId || _id) && (
              <div className={styles.mfrs_item} key={index}>
                <MainTopListItem
                  userId={userId || accountId}
                  documentId={documentId || _id}
                />
              </div>
            )
        )}
      </div>
    </div>
  )
}
