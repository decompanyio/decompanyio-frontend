import React, { ReactElement, useEffect } from 'react'
import commonView from '../common/commonView'
import repos from '../utils/repos'

import Layout from 'components/Layout'
import DocumentInfo from '../service/model/DocumentInfo'
import Router from 'next/router'
import ViewContainer from '../components/view/ViewContainer'
import Meta from '../graphql/models/Meta'
import { withApollo } from '../components/Apollo'
import common from '../common/common'

function PageContentsView(
  { documentData, text, ratio, readPage, metaData, message, thumbnailList },
  ...rest
): ReactElement {
  useEffect(() => {
    if (message) Router.push('/not_found_page')
  }, [])

  return (
    <Layout
      title={documentData.title}
      path="contents_view"
      {...rest}
      metaData={metaData}
    >
      <ViewContainer
        documentData={documentData}
        text={text}
        ratio={ratio}
        readPage={readPage}
        thumbnailList={thumbnailList}
      />
    </Layout>
  )
}

PageContentsView.getInitialProps = async props => {
  let seoTitle = encodeURIComponent(
    commonView.getPathFromPathname(props.asPath)
  )

  const {
    document,
    text,
    totalViewCountInfo,
    message
  } = await repos.Document.getDocument(seoTitle)

  const documentData = new DocumentInfo(document)
  const metaData = new Meta(documentData)
  const textData = text || []
  const thumbnailList = new Array(documentData.totalPages)

  for (let i = 0; i < documentData.totalPages; i++) {
    thumbnailList[i] = common.getThumbnail(
      documentData.documentId,
      1024,
      i + 1,
      ''
    )
  }

  return {
    documentData: documentData,
    ratio: documentData.dimensions
      ? documentData.dimensions.width / documentData.dimensions.height
      : 1,
    text: textData,
    totalViewCountInfo,
    readPage: 0,
    metaData,
    message,
    thumbnailList
  }
}

export default withApollo({ ssr: true })(PageContentsView)
