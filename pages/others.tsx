import Layout from 'components/Layout'
import Others from '../components/Others'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'

export default function PageOthers(): ReactElement {
  return (
    <Layout title={'More' + commonData.commonTitle} path="more">
      <Others />
    </Layout>
  )
}
