import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import ProfileUploadTab from '../profileUpload/ProfileUploadTab'
import ProfileVoteTab from '../profileVote/ProfileVoteTab'
import ProfileAnalyticsTab from '../ProfileAnalytics'
import React, { ReactElement } from 'react'
import { ProfileTabProps } from '../../../typings/interfaces'
import ProfileMyListTab from '../profileMyList/ProfileMyListTab'
import ProfileHistoryTab from '../profileHistory/ProfileHistoryTab'
import ProfileWalletHistoryTab from '../profileWalletHistory/ProfileWalletHistoryTab'

export default function ProfileTab({
  profileInfo,
  owner
}: ProfileTabProps): ReactElement {
  return (
    <div className={styles.pt_container}>
      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>{psString('profile-uploaded')}</Tab>
          <Tab>{psString('profile-voted')}</Tab>
          {owner && <Tab>{psString('profile-profileAnalytics')}</Tab>}
          {owner && <Tab>{psString('profile-profileMyList')}</Tab>}
          {owner && <Tab>{psString('profile-profileHistory')}</Tab>}
          {owner && <Tab>{psString('profile-walletHistory')}</Tab>}
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

        {owner && (
          <TabPanel>
            <ProfileMyListTab profileInfo={profileInfo} />
          </TabPanel>
        )}

        {owner && (
          <TabPanel>
            <ProfileHistoryTab profileInfo={profileInfo} />
          </TabPanel>
        )}

        {owner && (
          <TabPanel>
            <ProfileWalletHistoryTab />
          </TabPanel>
        )}
      </Tabs>
    </div>
  )
}
