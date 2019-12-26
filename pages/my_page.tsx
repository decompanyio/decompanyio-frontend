import React from "react";
import Layout from "components/Layout";
import repos from "../utils/repos";
import common from "../common/common";
import ProfileSummary from "../components/body/profile/ProfileSummary";
import ProfileTab from "../components/body/profile/ProfileTab";
import common_data from "../common/common_data";

const getParams = (identification: string) => {
  let params: any;
  if (common.checkEmailForm(identification)) params = { email: identification };
  else params = { username: identification };
  return params;
};

export default function Index({ profileInfo }, ...rest) {
  return (
    <Layout
      title={profileInfo.username + common_data.commonTitle}
      path="my_page"
      {...rest}
    >
      <ProfileSummary profileInfo={profileInfo} />
      <ProfileTab profileInfo={profileInfo} />
    </Layout>
  );
}

Index.getInitialProps = async props => {
  let identifier = getParams(props.asPath.substr(2, props.asPath.length));
  const profileInfo = await repos.Account.getProfileInfo(identifier);

  return { profileInfo };
};
