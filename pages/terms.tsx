import Layout from '../components/Layout'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'
import { psString } from '../utils/localization'
import Term from 'components/page/Term'

export default function PageTerms(): ReactElement {
  return (
    <Layout
      title={psString('terms-title') + commonData.commonTitle}
      path="terms"
    >
      <Term />
    </Layout>
  )
}
