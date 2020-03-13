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

// DocumentCard - No SSR
const DocumentCardWithoutSSR = dynamic(
  () => import('components/common/card/DocumentCard'),
  { ssr: false }
)

// 문서 목록 GET
const getDocuments = (path: string): Promise<[]> =>
  repos.Document.getDocumentList({ path: path })
    .then((res): [] => res.resultList)
    .catch((_err): [] => [])

// 찜 목록 GET
const getMylist = (id: string): Promise<[]> =>
  repos.Document.getMyList({ userId: id })
    .then((res): [] => res)
    .catch((_err): [] => [])

// 내가 본 문서 목록 GET
const getHistory = (id: string): Promise<[]> =>
  repos.Document.getHistory({ userId: id })
    .then((res): [] => res)
    .catch((_err): [] => [])

export default function({ path }: MainListProps): ReactElement {
  const [documentData, setDocumentData] = useState([])
  const [dataExist, setDataExist] = useState(true)

  useEffect(() => {
    ;(async function() {
      let _documentData = []

      if (AUTH_APIS.isAuthenticated() && path === 'mylist') {
        _documentData = await getMylist(AUTH_APIS.getMyInfo().sub)
        _documentData = _documentData['resultList']
      } else if (AUTH_APIS.isAuthenticated() && path === 'history') {
        _documentData = await getHistory(AUTH_APIS.getMyInfo().sub)
        _documentData = _documentData['resultList']
      } else if (path !== 'mylist' && path !== 'history') {
        _documentData = await getDocuments(path)
      } else {
        setDataExist(false)
      }

      if (_documentData.length > 0) setDocumentData(_documentData)
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
