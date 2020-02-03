import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as styles from "../../../public/static/styles/main.scss";
import { psString } from "../../../utils/localization";
import ProfileUploadTab from "./ProfileUploadTab";
import ProfileVoteTab from "./ProfileVoteTab";
import ProfileAnalyticsTab from "./ProfileAnalyticsTab";
import React from "react";

type Type = {
  profileInfo: any;
  owner: boolean;
};

export default function({ profileInfo, owner }: Type) {
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
          <ProfileVoteTab profileInfo={profileInfo} owner={owner} />
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
