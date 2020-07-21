import React, { ReactElement } from 'react'
import MainEventSection from './MainEventSection'
import MainHeaderSection from './MainHeaderSection'
import MainFirstSection from './MainFirstSection'
import MainSecondSection from './MainSecondSection'
import MainThirdSection from './MainThirdSection'

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
