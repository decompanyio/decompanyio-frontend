import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { ProfileHistoryItemProps } from '../../../../typings/interfaces'
import ProfileHistoryThumb from '../ProfileHistoryThumb'
import ProfileHistoryTitle from '../ProfileHistoryTitle'
import ProfileHistoryInfo from '../ProfileHistoryInfo'
import ProfileHistoryDesc from '../ProfileHistoryDesc'

export default function ProfileHistoryItem({
  documentData,
  documentRoyalty
}: ProfileHistoryItemProps): ReactElement {
  return (
    <div className={styles.puti_container}>
      <ProfileHistoryThumb documentData={documentData} />

      <div className={styles.puti_contentsContainer}>
        <ProfileHistoryTitle documentData={documentData} />

        <ProfileHistoryDesc documentData={documentData} />

        <ProfileHistoryInfo
          documentData={documentData}
          documentRoyalty={documentRoyalty}
        />
      </div>
    </div>
  )
}
