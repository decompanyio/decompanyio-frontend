import Layout from '../components/Layout'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'
import FAQ from 'components/page/FAQ'

export default function PageFAQ(): ReactElement {
  return (
    <Layout title={'FAQ' + commonData.commonTitle} path="faq">
      <FAQ />
    </Layout>
  )
}
