import Layout from 'components/Layout'
import Others from '../components/body/others/Others'
import TagList from '../service/model/TagList'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'

export default function Index({ tagList }): ReactElement {
  return (
    <Layout title={'More' + commonData.commonTitle} path="more">
      <Others tagList={tagList} />
    </Layout>
  )
}

Index.getInitialProps = () => {
  return new TagList(null)
}
