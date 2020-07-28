import * as styles from 'public/static/styles/scss/index.scss'
import Link from 'next/link'
import { Lang, psGetLang, psSetLang } from 'utils/localization'
import React, { ReactElement, useEffect, useState } from 'react'
import FooterSns from './FooterSns'
import Dropdown from '../common/Dropdown'
import commonData from '../../common/commonData'
import { string } from 'prop-types'

export default function(): ReactElement {
  const [dropdownList, setDropdownList] = useState(string[''])

  const watchChangeValue = v => {
    let site = v.value

    if (site === commonData.familySite[0])
      window.open(commonData.familySiteUrl[0], '_blank')
    else if (site === commonData.familySite[1])
      window.open(commonData.familySiteUrl[1], '_blank')
    else if (site === commonData.familySite[2])
      psSetLang(commonData.familySite[2] === 'Korean' ? Lang.KO : Lang.EN)
  }

  useEffect(() => {
    let arr = commonData.familySite
    arr[2] = psGetLang() === 'KO' ? 'English' : 'Korean'
    setDropdownList(arr)
  })

  return (
    <footer>
      <div className={styles.f_menu}>
        <ul>
          <li>
            <a
              aria-label="About Us"
              href="https://www.polarishare.io"
              target="_blank"
              rel="noopener noreferrer"
              title="Polaris Share IR"
            >
              About us
            </a>
          </li>
          <li>
            <Link href="/user_guide" as="/ug">
              <a rel="nofollow" aria-label="User Guide">
                <div className={styles.f_navType_2}>User Guide</div>
              </a>
            </Link>
          </li>
          <li>
            <a
              rel="nofollow"
              aria-label="Whitepaper"
              target="_blank"
              href={
                psGetLang() === 'KO'
                  ? commonData.whitepaperURL.ko
                  : commonData.whitepaperURL.en
              }
            >
              <div className={styles.f_navType_1}>Whitepaper</div>
            </a>
          </li>
          <li>
            <Link href="/terms" as="/t">
              <a rel="nofollow" aria-label="Terms">
                <div className={styles.f_navType_1}>Terms of Service</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/privacy_policy" as="/pp">
              <a rel="nofollow" aria-label="Privacy Policy">
                <div className={styles.f_navType_3}>Privacy Policy</div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.f_contents}>
        <div className={styles.f_contentsWrapper}>
          <p className={styles.f_logo}>
            <i className={styles.sprite_logo} />
            <span className="for-a11y">POLARIS SHARE</span>
          </p>
          <div className={styles.f_copy}>
            <p>
              EMAIL:{' '}
              <a href={'mailto: ' + commonData.commonMail}>
                {commonData.commonMail}
              </a>
            </p>
            <p>Copyrightⓒ 2020 POLARIS SHARE</p>
          </div>

          <FooterSns />

          <div className={styles.f_familySite}>
            {/*<select name="" id="">
              <option value="">FAMILY SITE</option>
            </select>*/}
            <Dropdown
              options={dropdownList}
              placeholder={'FAMILY SITE'}
              className={'dropdown_footer'}
              arrowClassName={'dropdown_footerArrow'}
              menuClassName={'dropdown_footerMenu'}
              onChange={watchChangeValue}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
