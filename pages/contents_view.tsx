import React, { ReactElement, useEffect } from 'react'
import commonView from '../common/commonView'
import { APP_CONFIG } from '../app.config'
import repos from '../utils/repos'

import Layout from 'components/Layout'
import DocumentInfo from '../service/model/DocumentInfo'
import UserInfo from '../service/model/UserInfo'
import Router from 'next/router'
import ViewContainer from '../components/body/view/ViewContainer'

export default function Index(
  { documentData, text, ratio, readPage, metaData, message },
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
      />
    </Layout>
  )
}

Index.getInitialProps = async props => {
  let seoTitle = commonView.getPathFromPathname(props.asPath)
  const {
    document,
    featuredList,
    text,
    totalViewCountInfo,
    message
  } = await repos.Document.getDocument(seoTitle)
  const documentData = new DocumentInfo(document)
  const authorData = new UserInfo(documentData.author)
  const textData = text || []

  const metaData = {
    title: documentData.title,
    seoTitle: documentData.seoTitle,
    description: documentData.desc,
    twitter: {
      card: 'summary_large_image',
      site: '@Polarishre',
      title: documentData.title,
      description: documentData.desc || 'Sharing knowledge in new ways',
      image:
        APP_CONFIG.domain().image + '/' + documentData.documentId + '/1024/1',
      url: documentData.shortUrl
        ? documentData.shortUrl
        : APP_CONFIG.domain().mainHost +
          '/@' +
          (authorData.username || authorData.email) +
          '/' +
          documentData.seoTitle
    },
    og: {
      type: 'website',
      title: documentData.title,
      description: documentData.desc || 'Sharing knowledge in new ways',
      /*eslint-disable @typescript-eslint/camelcase*/
      site_name: 'Polaris Share',
      image_width: '720',
      image_height: documentData.dimensions
        ? Math.floor(
            Number(
              (documentData.dimensions.height * 720) /
                documentData.dimensions.width
            )
          )
        : '498',
      /*eslint-disable @typescript-eslint/camelcase*/
      url: documentData.shortUrl
        ? documentData.shortUrl
        : APP_CONFIG.domain().mainHost +
          '/@' +
          (authorData.username || authorData.email) +
          '/' +
          documentData.seoTitle
    }
  }

  return {
    documentData: documentData,
    ratio: documentData.dimensions
      ? documentData.dimensions.width / documentData.dimensions.height
      : 1,
    featuredList,
    text: textData,
    totalViewCountInfo,
    readPage: 0,
    metaData,
    message
  }
}
