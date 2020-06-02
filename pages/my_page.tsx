import React, { ReactElement, useEffect, useState } from 'react'
import Layout from 'components/Layout'
import commonData from '../common/commonData'
import ProfileContainer from '../components/body/profile/ProfileContainer'
import { withApollo } from '../components/apollo'
import { AUTH_APIS } from '../utils/auth'

function Index({ identifier }, ...rest): ReactElement {
  const [owner, setOwner] = useState(-1)

  useEffect(() => {
    setOwner(AUTH_APIS.getMyInfo().username === identifier ? 1 : 0)
  }, [])

  return (
    <Layout
      title={identifier + commonData.commonTitle}
      path="my_page"
      {...rest}
    >
      <ProfileContainer identifier={identifier} owner={owner} />
    </Layout>
  )
}

Index.getInitialProps = async props => {
  let identifier = props.asPath.substr(2, props.asPath.length)

  return { identifier }
}

export default withApollo()(Index)
