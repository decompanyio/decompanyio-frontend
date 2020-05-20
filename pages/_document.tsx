import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { psGetLang } from '../utils/localization'

export default class MyDocument extends Document<{
  styleTags
  gaTrackingId
  locale
}> {
  public static getInitialProps({ renderPage, req }: { renderPage; req? }) {
    const page = renderPage(App => props => <App {...props} />)
    return {
      ...page,
      locale: req.locale
    }
  }

  public render() {
    return (
      <Html lang={psGetLang().toLowerCase()}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta name="theme-color" content="#3d5afe" />
          <meta
            name="msapplication-TileImage"
            content="https://res.polarishare.com/static/favicon/ms-icon-144x144.png"
          />
          <meta name="msapplication-TileColor" content="#3d5afe" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
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
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons&display=swap"
          />{' '}
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/styles/thirdparty.css"
          />
          <meta
            name="fb_app_id"
            property="fb:app_id"
            content="2237550809844881"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
