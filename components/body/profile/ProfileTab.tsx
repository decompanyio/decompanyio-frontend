import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as styles from "../../../public/static/styles/main.scss";
import { useSelector } from "react-redux";
import { psString } from "../../../utils/localization";
import { useState } from "react";
import ProfileUploadTab from "./ProfileUploadTab";
import ProfileVoteTab from "./ProfileVoteTab";
import ProfileAnalyticsTab from "./ProfileAnalyticsTab";

type Type = {
  profileInfo: any;
};

export default function({ profileInfo }: Type) {
  const myInfo = useSelector(state => state.main.myInfo);
  const [owner] = useState(
    profileInfo.username === myInfo.username ||
      profileInfo.email === myInfo.email
  );

  return (
    <div className={styles.pt_container}>
      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>{psString("profile-uploaded")}</Tab>
          <Tab>{psString("profile-voted")}</Tab>
          {owner && <Tab>{psString("profile-analytics")}</Tab>}
        </TabList>

        <TabPanel>
          <ProfileUploadTab profileInfo={profileInfo} owner={owner} />
        </TabPanel>

        <TabPanel>
          <ProfileVoteTab profileInfo={profileInfo} />
        </TabPanel>

        {owner && (
          <TabPanel>
            <ProfileAnalyticsTab profileInfo={profileInfo} />
          </TabPanel>
        )}
      </Tabs>
    </div>
  );
}
