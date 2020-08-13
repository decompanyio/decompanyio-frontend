import React, { ReactElement } from 'react'
import Main from 'components/main/MainContainer'
import Layout from 'components/Layout'
import { withApollo } from '../components/Apollo'

function index(): ReactElement {
  return (
    <Layout title="Polaris Share">
      <Main />
    </Layout>
  )
}

export default withApollo({ ssr: false })(index)
