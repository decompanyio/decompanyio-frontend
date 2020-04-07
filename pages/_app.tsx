import 'es6-promise/auto'
import 'babel-polyfill'
import React, { ReactElement } from 'react'
import store from 'redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }): ReactElement {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  ctx.reduxStore = store

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}
