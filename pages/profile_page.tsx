import React, { ReactElement, useState } from 'react'
import Layout from 'components/Layout'
import commonData from '../common/commonData'
import ProfileContainer from '../components/profile/ProfileContainer'
import { withApollo } from '../components/Apollo'
import { AUTH_APIS } from '../utils/auth'

function PageProfile({ identifier }, ...rest): ReactElement {
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

PageProfile.getInitialProps = async props => {
  return { identifier: props.asPath.split('/')[1].split('@')[1] }
}

export default withApollo()(PageProfile)
