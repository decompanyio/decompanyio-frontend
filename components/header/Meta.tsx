import Head from 'next/head'
import React, { ReactElement } from 'react'

interface MetaProps {
  title: string
  metaData
}

export default function({ title, metaData }: MetaProps): ReactElement {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        name="viewport"
      />
      <meta
        name="msapplication-TileImage"
        content="https://res.polarishare.com/static/favicon/ms-icon-144x144.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
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
      <meta content="2237550809844881" property="fb:app_id" name="fb_app_id" />

      <link rel="manifest" type="application/json" href="/manifest.json" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="https://res.polarishare.com/static/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="https://res.polarishare.com/static/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="https://res.polarishare.com/static/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="https://res.polarishare.com/static/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="https://res.polarishare.com/static/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="https://res.polarishare.com/static/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="https://res.polarishare.com/static/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="https://res.polarishare.com/static/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://res.polarishare.com/static/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://res.polarishare.com/static/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://res.polarishare.com/static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="https://res.polarishare.com/static/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://res.polarishare.com/static/favicon/favicon-16x16.png"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/static/styles/thirdparty.css"
      />
    </Head>
  )
}
