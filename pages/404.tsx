import commonData from '../common/commonData'
import Layout from '../components/Layout'
import React, { ReactElement } from 'react'
import NotFoundPage from '../components/page/NotFoundPage'
import { withApollo } from '../components/Apollo'

function PageNotFoundPage(...rest): ReactElement {
  return (
    <Layout title={'404' + commonData.commonTitle} path="404" {...rest}>
      <NotFoundPage />
    </Layout>
  )
}

export default withApollo({ ssr: false })(PageNotFoundPage)
