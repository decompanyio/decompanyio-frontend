import Layout from '../components/Layout'
import { psString } from '../utils/localization'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'
import PrivacyPolicy from 'components/page/PrivacyPolicy'
import { withApollo } from '../components/Apollo'

function PagePrivacyPolicy(): ReactElement {
  return (
    <Layout
      title={psString('helmet-title-privacy') + commonData.commonTitle}
      path="privacy_policy"
    >
      <PrivacyPolicy />
    </Layout>
  )
}

export default withApollo({ ssr: false })(PagePrivacyPolicy)
