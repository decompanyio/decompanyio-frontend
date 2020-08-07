import Layout from 'components/Layout'
import Others from '../components/Others'
import TagList from '../service/model/TagList'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'

export default function PageOthers({ tagList }): ReactElement {
  return (
    <Layout title={'More' + commonData.commonTitle} path="more">
      <Others tagList={tagList} />
    </Layout>
  )
}

PageOthers.getInitialProps = () => {
  return new TagList(null)
}
