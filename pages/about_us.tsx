import Layout from 'components/Layout'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'
import AboutUs from 'components/page/AboutUs'

export default function PageAboutUs(): ReactElement {
  return (
    <Layout title={'About Us' + commonData.commonTitle} path="about_us">
      <AboutUs />
    </Layout>
  )
}
