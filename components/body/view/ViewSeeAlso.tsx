import { ThreeBounce } from 'better-react-spinkit'
import { psString } from 'utils/localization'
import * as styles from 'public/static/styles/main.scss'
import React, { ReactElement } from 'react'
import { ViewSeeAlsoProps } from '../../../typings/interfaces'

export default function({ documentData }: ViewSeeAlsoProps): ReactElement {
  if (!documentData) {
    return (
      <div className="spinner">
        <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
      </div>
    )
  } else {
    return (
      <aside className={styles.vsa_container}>
        <div className={styles.vsa_mainTitle}>{psString('see-also-text')}</div>
        {
          // TODO  추천 리스트 추가 필요합니다.
          //
          /*  {documentData.featuredList.map((result, idx) => (
          <FeaturedListItemContainer resultItem={result} key={idx} />
        ))}*/
        }
      </aside>
    )
  }
}
