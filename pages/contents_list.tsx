import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import ContentsList from '../components/body/list/ContentsList'
import repos from '../utils/repos'
import common_data from '../common/common_data'
import { AUTH_APIS } from '../utils/auth'

// get Tag
const getTag = (path: any) => {
  if (path[1] && path[1] === 'tag') return path[2] || null
  else return null
}

// get Path
const getPath = (path: any) => {
  if (path[1] && common_data.pathArr.includes(path[1])) {
    return path[1] || 'latest'
  } else return 'latest'
}

export default function index({ documentList, tag, path }, ...rest) {
  const [list, setList] = useState(documentList)

  useEffect(() => {
    const params = {
      userId: AUTH_APIS.getMyInfo().sub
    }

    if (
      (path === 'mylist' || path === 'history') &&
      list.length === 0 &&
      params.userId !== ''
    ) {
      (async function() {
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
      title={(tag || path) + common_data.commonTitle}
      path='contents_list'
      {...rest}
    >
      <ContentsList documentList={list} tag={tag} path={path} />
    </Layout>
  )
}

index.getInitialProps = async props => {
  let path = props.asPath.split('/')

  const params = {
    pageNo: 1,
    tag: getTag(path),
    path: getPath(path)
  }

  const documentList =
    params.path === 'mylist' || params.path === 'history'
      ? []
      : await repos.Document.getDocumentList(params)

  return { documentList, tag: params.tag, path: params.path }
}
