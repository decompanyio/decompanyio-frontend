import Layout from 'components/Layout'
import Others from '../components/Others'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'
import { withApollo } from '../components/Apollo'

function PageOthers(): ReactElement {
  return (
    <Layout title={'More' + commonData.commonTitle} path="more">
      <Others />
    </Layout>
  )
}

export default withApollo({ ssr: false })(PageOthers)
