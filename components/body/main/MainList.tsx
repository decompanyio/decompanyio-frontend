import React, { useState, useEffect, ReactElement } from 'react'
import { psString } from '../../../utils/localization'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import * as styles from 'public/static/styles/main.scss'
import MainListMock from 'components/common/mock/MainListMock'
import repos from '../../../utils/repos'
import { AUTH_APIS } from '../../../utils/auth'
import log from '../../../utils/log'
import { MainListProps } from '../../../typings/interfaces'
import DocumentInfo from '../../../service/model/DocumentInfo'

const DocumentCardWithoutSSR = dynamic(
  () => import('components/common/card/DocumentCard'),
  { ssr: false }
)

export default function({ path }: MainListProps): ReactElement {
  const [documentData, setDocumentData] = useState([{}])
  const [dataExist, setDataExist] = useState(true)

  const getDocuments = (
    path: string
  ): Promise<[]> => //TODO catch 추가 필요합니다
    repos.Document.getDocumentList({ path: path }).then(res => res.resultList)

  const getMylist = (id: string): Promise<[]> =>
    repos.Document.getMyList({ userId: id }).then(res => res.resultList)

  const getHistory = (id: string): Promise<[]> =>
    repos.Document.getHistory({ userId: id }).then(res => res.resultList)

  useEffect((): void => {
    ;(async function(): Promise<void> {
      let _documentData = [{}]

      if (AUTH_APIS.isLogin() && path === 'mylist')
        _documentData = await getMylist(AUTH_APIS.getMyInfo().id)
      else if (AUTH_APIS.isLogin() && path === 'history')
        _documentData = await getHistory(AUTH_APIS.getMyInfo().id)
      else if (path !== 'mylist' && path !== 'history')
        _documentData = await getDocuments(path)
      else setDataExist(false)

      log.MainList.getDocuments(path)

      if (_documentData && _documentData.length > 0)
        setDocumentData(_documentData)
      else setDataExist(false)
    })()
  }, [])

  if (dataExist) {
    if (documentData.length > 0 && documentData[0] !== {}) {
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
            {documentData.map((res, idx) => {
              return (
                idx < 4 && (
                  <DocumentCardWithoutSSR
                    key={idx}
                    documentData={new DocumentInfo(res)}
                  />
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
