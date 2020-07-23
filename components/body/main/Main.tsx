import React, { ReactElement } from 'react'
import MainEventSection from './MainEventSection'
import MainHeaderSection from './header/MainHeaderSection'
import MainFirstSection from './first/MainFirstSection'
import MainSecondSection from './second/MainSecondSection'
import MainThirdSection from './third/MainThirdSection'

export default function(): ReactElement {
  return (
    <div>
      <MainHeaderSection />

      <MainFirstSection />

      <MainSecondSection />

      <MainThirdSection />

      {/* <div className={styles.m_container}>
        {commonData.pathArr.map(
          (path, idx): ReactElement => (
            <DocumentCardList path={path} key={idx} />
          )
        )}
      </div>*/}

      <MainEventSection />
    </div>
  )
}
