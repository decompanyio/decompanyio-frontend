import repos from '../utils/repos'
import TrackingAuthor from '../components/tracking/TrackingAuthor'
import Layout from 'components/Layout'
import TrackingList from '../components/tracking/TrackingList'
import commonData from '../common/commonData'
import React, { ReactElement } from 'react'
import { AUTH_APIS } from '../utils/auth'
import Router from 'next/router'
import DocumentInfo from '../service/model/DocumentInfo'
import TrackingOption from '../components/tracking/TrackingOption'
import { withApollo } from '../components/Apollo';

function PageTracking(
  { documentData, ratio },
  ...rest
): ReactElement | Promise<boolean> {
  if (typeof window !== 'undefined' && !AUTH_APIS.isLogin()) {
    return Router.push('/not_found_page')
  }

  return (
    <Layout
      title={'tracking AlertList' + commonData.commonTitle}
      path="tracking"
      {...rest}
    >
      <TrackingOption />
      <TrackingAuthor documentData={documentData} ratio={ratio} />
      <TrackingList documentData={documentData} />
    </Layout>
  )
}

PageTracking.getInitialProps = async props => {
  let seoTitle = decodeURI(props.asPath.split('/')[3])

  const {
    document,
    featuredList,
    totalViewCountInfo
  } = await repos.Document.getDocument(seoTitle)

  const documentData = new DocumentInfo(document)

  return {
    documentData: documentData,
    ratio: documentData.dimensions.width / documentData.dimensions.height,
    featuredList,
    totalViewCountInfo
  }
}

export default withApollo({ ssr: false })(PageTracking)