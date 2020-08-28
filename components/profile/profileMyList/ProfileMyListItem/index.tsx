import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { ProfileMyListItemProps } from '../../../../typings/interfaces'
import ProfileMyListThumb from '../ProfileMyListThumb'
import ProfileMyListTitle from '../ProfileMyListTitle'
import ProfileMyListInfo from '../ProfileMyListInfo'
import ProfileMyListDesc from '../ProfileMyListDesc'

export default function ProfileMyListItem({
  documentData,
  documentRoyalty
}: ProfileMyListItemProps): ReactElement {
  return (
    <div className={styles.puti_container}>
      <ProfileMyListThumb documentData={documentData} />

      <div className={styles.puti_contentsContainer}>
        <ProfileMyListTitle documentData={documentData} />

        <ProfileMyListDesc documentData={documentData} />

        <ProfileMyListInfo
          documentData={documentData}
          documentRoyalty={documentRoyalty}
        />
      </div>
    </div>
  )
}
