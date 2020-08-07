import Layout from '../components/Layout'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'
import Guide from 'components/page/Guide'

export default function PageUserGuide(): ReactElement {
  return (
    <Layout
      title={'UserAvatar Guide' + commonData.commonTitle}
      path="user_guide"
    >
      <Guide />
    </Layout>
  )
}
