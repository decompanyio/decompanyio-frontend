import React, { ReactElement } from 'react'
import Layout from 'components/Layout'
import commonData from '../common/commonData'
import { withApollo } from '../components/apollo'
import ContentsList from '../components/body/list/ContentsList'

function Index({ tag, path }, ...rest): ReactElement {
  return (
    <Layout
      title={(tag || path) + commonData.commonTitle}
      path="contents_list"
      {...rest}
    >
      <ContentsList tag={tag} path={path} />
    </Layout>
  )
}

Index.getInitialProps = async props => {
  let path = props.asPath.split('/')

  const getTag = path[1] && path[1] === 'tag' ? path[2] || '' : ''
  const getPath =
    path[1] && commonData.pathArr.includes(path[1])
      ? path[1] || 'latest' // path 기본값은 'latest'로 정의 합니다.
      : 'latest'

  return { tag: getTag, path: getPath }
}

export default withApollo({ ssr: true })(Index)
