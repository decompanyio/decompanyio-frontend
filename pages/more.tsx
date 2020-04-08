import Layout from 'components/Layout'
import More from '../components/body/more/More'
import TagList from '../service/model/TagList'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'

export default function Index({ tagList }): ReactElement {
  return (
    <Layout title={'More' + commonData.commonTitle} path="more">
      <More tagList={tagList} />
    </Layout>
  )
}

Index.getInitialProps = () => {
  return new TagList(null)
}
