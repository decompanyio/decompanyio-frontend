import common_data from '../common/common_data'
import Layout from '../components/Layout'
import React from 'react'
import NotFoundPage from '../components/common/page/NotFoundPage'

export default function index(...rest) {
  return (
    <Layout
      title={'Deleted document' + common_data.commonTitle}
      path='deleted'
      {...rest}
    >
      <NotFoundPage />
    </Layout>
  )
}
