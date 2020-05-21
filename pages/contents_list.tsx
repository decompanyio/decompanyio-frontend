import React, { ReactElement, useEffect, useState } from 'react'
import Layout from 'components/Layout'
import ContentsList from '../components/body/list/ContentsList'
import repos from '../utils/repos'
import commonData from '../common/commonData'
import { AUTH_APIS } from '../utils/auth'
import { withApollo } from '../components/apollo'

const getTag = (path: string[]): string =>
  path[1] && path[1] === 'tag' ? path[2] || '' : ''

const getPath = (path: string[]): string =>
  path[1] && commonData.pathArr.includes(path[1])
    ? path[1] || 'latest' // path 기본값은 'latest'로 정의 합니다.
    : 'latest'

function Index({ documentList, tag, path }, ...rest): ReactElement {
  const [list, setList] = useState(documentList)

  useEffect(() => {
    const params = {
      userId: AUTH_APIS.getMyInfo().id
    }

    if (
      (path === 'mylist' || path === 'history') &&
      list.length === 0 &&
      params.userId !== ''
    ) {
      ;(async function() {
        let _dataSet = { resultList: [] }
        if (path === 'mylist') {
          _dataSet = await repos.Document.getMyList(params)
        } else if (path === 'history') {
          _dataSet = await repos.Document.getHistory(params)
        }
        setList(_dataSet.resultList)
      })()
    }
  }, [])

  return (
    <Layout
      title={(tag || path) + commonData.commonTitle}
      path="contents_list"
      {...rest}
    >
      <ContentsList documentList={list} tag={tag} path={path} />
    </Layout>
  )
}

Index.getInitialProps = async props => {
  let path = props.asPath.split('/')

  const params = {
    pageNo: 1,
    tag: getTag(path),
    path: getPath(path)
  }

  const documentList =
    params.path === 'mylist' || params.path === 'history'
      ? []
      : await repos.Document.getDocumentList(params) //TODO catch 추가 필요 합니다

  return { documentList, tag: params.tag, path: params.path }
}

export default withApollo({ ssr: true })(Index)
