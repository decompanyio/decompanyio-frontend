import Layout from 'components/Layout'
import { APP_CONFIG } from '../app.config'
import React, { ReactElement } from 'react'
import commonData from '../common/commonData'
import { AUTH_APIS } from '../utils/auth'
import Router from 'next/router'
import repos from 'utils/repos'
import dynamic from 'next/dynamic'

// DocumentCard - No SSR
const TrackingDetailListWithoutSSR = dynamic(
  () => import('components/body/trackingDetail/TrackingDetailList'),
  { ssr: false }
)

export default function Index(
  { document, text, cid },
  ...rest
): ReactElement | Promise<boolean> {
  if (typeof window !== 'undefined' && !AUTH_APIS.isLogin()) {
    return Router.push('/not_found_page')
  }

  return (
    <Layout
      title={'Tracking Detail' + commonData.commonTitle}
      path="tracking_detail"
      {...rest}
    >
      <TrackingDetailListWithoutSSR
        documentData={document}
        text={text}
        cid={cid}
      />
    </Layout>
  )
}

Index.getInitialProps = async props => {
  let seoTitle = decodeURI(props.asPath.split('/')[3])
  let url = new URL(APP_CONFIG.domain().mainHost + props.asPath)
  let cid = url.searchParams.get('cid')

  const { document, text } = await repos.Document.getDocument(seoTitle)

  return {
    document,
    text,
    cid
  }
}
