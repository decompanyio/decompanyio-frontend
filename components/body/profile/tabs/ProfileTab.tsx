import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import * as styles from '../../../../public/static/styles/main.scss'
import { psString } from '../../../../utils/localization'
import ProfileUploadTab from './upload/ProfileUploadTab'
import ProfileVoteTab from './vote/ProfileVoteTab'
import ProfileAnalyticsTab from './analytics/ProfileAnalyticsTab'
import React, { ReactElement } from 'react'
import { ProfileTabProps } from '../../../../typings/interfaces'

export default function({ profileInfo, owner }: ProfileTabProps): ReactElement {
  return (
    <div className={styles.pt_container}>
      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>{psString('profile-uploaded')}</Tab>
          <Tab>{psString('profile-voted')}</Tab>
          {owner && <Tab>{psString('profile-analytics')}</Tab>}
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
  )
}
