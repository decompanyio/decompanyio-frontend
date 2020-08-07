import React, { ReactElement } from 'react'
import MainEventSection from '../MainEvent'
import MainHeaderSection from '../sectionTop/MainTopSection'
import MainFirstSection from '../sectionFirst/MainFirstSection'
import MainSecondSection from '../sectionSecond/MainSecondSection'
import MainThirdSection from '../sectionThird/MainThirdSection'

export default function MainContainer(): ReactElement {
  return (
    <div>
      <MainHeaderSection />

      <MainFirstSection />

      <MainSecondSection />

      <MainThirdSection />

      <MainEventSection />
    </div>
  )
}
