import commonData from '../common/commonData'
import Layout from '../components/Layout'
import React, { ReactElement } from 'react'
import NotFoundPage from '../components/common/page/NotFoundPage'

export default function(...rest): ReactElement {
  return (
    <Layout title={'404' + commonData.commonTitle} path="404" {...rest}>
      <NotFoundPage />
    </Layout>
  )
}
