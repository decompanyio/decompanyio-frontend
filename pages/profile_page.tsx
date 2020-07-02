import React, { ReactElement, useState } from 'react'
import Layout from 'components/Layout'
import commonData from '../common/commonData'
import ProfileContainer from '../components/body/profile/ProfileContainer'
import { withApollo } from '../components/apollo'
import { AUTH_APIS } from '../utils/auth'

function Index({ identifier }, ...rest): ReactElement {
  const [owner] = useState(
    AUTH_APIS.getMyInfo().username === identifier ? 1 : 0
  )

  return (
    <Layout
      title={identifier + commonData.commonTitle}
      path="profile_page"
      {...rest}
    >
      <ProfileContainer identifier={identifier} owner={owner} />
    </Layout>
  )
}

Index.getInitialProps = async props => {
  return { identifier: props.asPath.split('/')[1].split('@')[1] }
}

export default withApollo()(Index)
