import React, { ReactElement } from 'react'
import Main from 'components/body/main/Main'
import Layout from 'components/Layout'
import { withApollo } from '../components/apollo'

function index(): ReactElement {
  return (
    <Layout title="Polaris Share">
      <Main />
    </Layout>
  )
}

export default withApollo({ ssr: true })(index)
