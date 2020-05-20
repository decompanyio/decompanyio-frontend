import React, { ReactElement } from 'react'
import { psString } from '../../../utils/localization'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import * as styles from 'public/static/styles/main.scss'
import { AUTH_APIS } from '../../../utils/auth'
import { DocumentCardListProps } from '../../../typings/interfaces'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import UserDocumentFavorite from '../../../graphql/queries/UserDocumentFavorite.graphql'
import UserDocumentHistory from '../../../graphql/queries/UserDocumentHistory.graphql'
import LatestDocumentCardList from '../../../graphql/queries/LatestDocumentCardList.graphql'
import PopularDocumentCardList from '../../../graphql/queries/PopularDocumentCardList.graphql'
import FeaturedDocumentCardList from '../../../graphql/queries/FeaturedDocumentCardList.graphql'
import MainListMock from '../../common/mock/MainListMock'
import log from '../../../utils/log'

const DocumentCardWithoutSSR = dynamic(
  () => import('components/common/card/DocumentCard'),
  { ssr: false }
)

export default function({ path }: DocumentCardListProps): ReactElement {
  if (
    (!AUTH_APIS.isLogin() && path === 'mylist') ||
    (!AUTH_APIS.isLogin() && path === 'history')
  )
    return <div />

  const { loading, error, data } = useQuery(
    gql`
      ${{
        latest: LatestDocumentCardList,
        popular: PopularDocumentCardList,
        featured: FeaturedDocumentCardList,
        mylist: UserDocumentFavorite,
        history: UserDocumentHistory
      }[path]}
    `,
    {
      variables: { userId: AUTH_APIS.getMyInfo().id },
      notifyOnNetworkStatusChange: false
    }
  )

  if (loading) return <MainListMock />

  if (error || !data) return <div />

  const dataList = data[Object.keys(data)[0]].findMany

  if (dataList.length === 0) return <div />

  log.DocumentCardList.getDocuments(path)

  return (
    <div>
      <div className={styles.ml_subjectWrapper}>
        <Link href={'/contents_list'} as={path}>
          <div className={styles.ml_subject}>
            {psString('main-category-' + path)}
          </div>
        </Link>
        <div className={styles.ml_seeAll}>
          {psString('main-see-all')}
          <i className="material-icons">keyboard_arrow_right</i>
        </div>
      </div>

      <div className={styles.ml_documentCardWrapper}>
        {dataList.map(({ userId, documentId, _id, accountId }, idx) => {
          return (
            idx < 4 &&
            (documentId || _id) && (
              <DocumentCardWithoutSSR
                key={idx}
                userId={userId || accountId}
                documentId={documentId || _id}
              />
            )
          )
        })}
      </div>
    </div>
  )
}
