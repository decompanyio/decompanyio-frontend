import commonData from '../common/commonData'
import Layout from '../components/Layout'
import React, { ReactElement } from 'react'
import NotFoundPage from '../components/page/NotFoundPage'

export default function PageDeletedPage(...rest): ReactElement {
  return (
    <Layout
      title={'DeletedPage document' + commonData.commonTitle}
      path="deleted"
      {...rest}
    >
      <NotFoundPage />
    </Layout>
  )
}
