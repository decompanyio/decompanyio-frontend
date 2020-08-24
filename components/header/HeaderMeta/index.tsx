import Head from 'next/head'
import React, { ReactElement } from 'react'
import { MetaProps } from '../../../typings/interfaces'

export default function HeaderMeta({
  title,
  metaData
}: MetaProps): ReactElement {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="tag" content={metaData.tag} />
      <meta name="extension" content={metaData.extension} />
      <meta name="description" content={metaData.description} />
      <meta name="seoTitle" content={metaData.seoTitle} />
      <meta name="twitter:card" content={metaData.twitter.card} />
      <meta name="twitter:site" content={metaData.twitter.site} />
      <meta name="twitter:title" content={metaData.twitter.title} />
      <meta name="twitter:description" content={metaData.twitter.description} />
      <meta name="twitter:image" content={metaData.twitter.image} />
      <meta name="twitter:url" content={metaData.twitter.url} />
      <meta property="og:url" content={metaData.og.url} />
      <meta property="og:site_name" content={metaData.og.site_name} />
      <meta property="og:type" content={metaData.og.type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaData.og.description} />
      <meta property="og:image:width" content={metaData.og.image_width} />
      <meta property="og:image:height" content={metaData.og.image_height} />
    </Head>
  )
}
