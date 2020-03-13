import commonData from '../common/commonData'
import Layout from '../components/Layout'
import React, { ReactElement } from 'react'
import NotFoundPage from '../components/common/page/NotFoundPage'

export default function(...rest): ReactElement {
  return (
    <Layout
      title={'Deleted document' + commonData.commonTitle}
      path="deleted"
      {...rest}
    >
      <NotFoundPage />
    </Layout>
  )
}
