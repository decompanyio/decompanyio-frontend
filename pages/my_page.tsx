import React, { ReactElement, useEffect, useState } from 'react'
import Layout from 'components/Layout'
import repos from '../utils/repos'
import common from '../common/common'
import ProfileSummary from '../components/body/profile/summary/ProfileSummary'
import ProfileTab from '../components/body/profile/tabs/ProfileTab'
import commonData from '../common/commonData'
import { AUTH_APIS } from '../utils/auth'
import Router from 'next/router'

const getParams = (
  identification: string
): { email: string } | { username: string } => {
  let params
  if (common.checkEmailForm(identification)) params = { email: identification }
  else params = { username: identification }
  return params
}

export default function Index({ profileInfo }, ...rest): ReactElement {
  const [owner, setOwner] = useState(-1)

  useEffect(() => {
    if (!profileInfo.email) Router.push('/not_found_page')

    if (owner === -1) {
      if (AUTH_APIS.isLogin()) {
        repos.Account.getAccountInfo()
          .then(res => {
            setOwner(
              profileInfo.email === res.user.email ||
                profileInfo.username === res.user.username
                ? 1
                : 0
            )
          })
          .catch(err => {
            console.log(err)
            setOwner(0)
          })
      } else {
        setOwner(0)
      }
    }
  })

  return (
    <Layout
      title={
        (profileInfo.username || profileInfo.email) + commonData.commonTitle
      }
      path="my_page"
      {...rest}
    >
      {owner !== -1 && (
        <ProfileSummary profileInfo={profileInfo} owner={owner === 1} />
      )}
      {owner !== -1 && (
        <ProfileTab profileInfo={profileInfo} owner={owner === 1} />
      )}
    </Layout>
  )
}

Index.getInitialProps = async props => {
  let identifier = getParams(props.asPath.substr(2, props.asPath.length))
  const profileInfo = await repos.Account.getProfileInfo(identifier)

  return { profileInfo }
}
