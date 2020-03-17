import React, { useState, useEffect, ReactElement } from 'react'
import { psString } from '../../../utils/localization'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import * as styles from 'public/static/styles/main.scss'
import MainListMock from 'components/common/mock/MainListMock'
import repos from '../../../utils/repos'
import { AUTH_APIS } from '../../../utils/auth'

interface MainListProps {
  path: string
}

const DocumentCardWithoutSSR = dynamic(
  () => import('components/common/card/DocumentCard'),
  { ssr: false }
)

const getDocuments = (path: string): Promise<[]> =>
  repos.Document.getDocumentList({ path: path }).then(res => res.resultList)

const getMylist = (id: string) =>
  repos.Document.getMyList({ userId: id }).then(res => res.resultList)

const getHistory = (id: string) =>
  repos.Document.getHistory({ userId: id }).then(res => res.resultList)

export default function({ path }: MainListProps): ReactElement {
  const [documentData, setDocumentData] = useState([])
  const [dataExist, setDataExist] = useState(true)

  useEffect(() => {
    ;(async function() {
      let _documentData = []

      if (AUTH_APIS.isAuthenticated() && path === 'mylist') {
        _documentData = await getMylist(AUTH_APIS.getMyInfo().id)
        _documentData = _documentData['resultList']
      } else if (AUTH_APIS.isAuthenticated() && path === 'history') {
        _documentData = await getHistory(AUTH_APIS.getMyInfo().id)
        _documentData = _documentData['resultList']
      } else if (path !== 'mylist' && path !== 'history') {
        _documentData = await getDocuments(path)
      } else {
        setDataExist(false)
      }

      if (_documentData && _documentData.length > 0)
        setDocumentData(_documentData)
      else setDataExist(false)
    })()
  }, [])

  if (dataExist) {
    if (documentData.length > 0) {
      return (
        <div>
          <div className={styles.ml_subjectWrapper}>
            <Link href="/contents_list" as={path}>
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
            {documentData.map((res, idx) => {
              return (
                idx < 4 && (
                  <DocumentCardWithoutSSR key={idx} documentData={res} />
                )
              )
            })}
          </div>
        </div>
      )
    } else {
      return <MainListMock />
    }
  }
  return <div />
}
