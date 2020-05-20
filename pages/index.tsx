import React, { ReactElement } from 'react'
import Main from 'components/body/main/Main'
import Layout from 'components/Layout'

function index(): ReactElement {
  return (
    <Layout title="Polaris Share">
      <Main />
    </Layout>
  )
}

export default index
