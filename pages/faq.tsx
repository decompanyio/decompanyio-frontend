import Layout from '../components/Layout'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'
import FAQ from 'components/page/FAQ'
import { withApollo } from '../components/Apollo'

function PageFAQ(): ReactElement {
  return (
    <Layout title={'FAQ' + commonData.commonTitle} path="faq">
      <FAQ />
    </Layout>
  )
}

export default withApollo({ ssr: false })(PageFAQ)
