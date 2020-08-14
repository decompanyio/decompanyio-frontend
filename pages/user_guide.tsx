import Layout from '../components/Layout'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'
import Guide from 'components/page/Guide'
import { withApollo } from '../components/Apollo'

function PageUserGuide(): ReactElement {
  return (
    <Layout title={'User Guide' + commonData.commonTitle} path="user_guide">
      <Guide />
    </Layout>
  )
}

export default withApollo({ ssr: false })(PageUserGuide)
