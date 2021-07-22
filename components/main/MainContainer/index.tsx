import React, { ReactElement } from 'react'
import MainEventSection from '../MainEvent'
import MainHeaderSection from '../sectionTop/MainTopSection'
import MainFirstSection from '../sectionFirst/MainFirstSection'
import MainSecondSection from '../sectionSecond/MainSecondSection'
import MainThirdSection from '../sectionThird/MainThirdSection'
import MainBottomSection from '../sectionBottom'

export default function MainContainer(): ReactElement {
  return (
    <div>
      <MainHeaderSection />

      <MainFirstSection />

      <MainSecondSection />

      <MainThirdSection />

      <MainBottomSection />

      <MainEventSection />
    </div>
  )
}
