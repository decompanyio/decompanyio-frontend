import Layout from '../components/Layout'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'
import { psString } from '../utils/localization'
import Term from 'components/page/Term'
import { withApollo } from '../components/Apollo'

function PageTerms(): ReactElement {
  return (
    <Layout
      title={psString('terms-title') + commonData.commonTitle}
      path="terms"
    >
      <Term />
    </Layout>
  )
}

export default withApollo({ ssr: false })(PageTerms)
