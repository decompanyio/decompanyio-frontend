import { psString } from '../utils/localization'
import Layout from '../components/Layout'
import * as styles from 'public/static/styles/main.scss'
import common_data from '../common/common_data'
import React from 'react'

function Guide() {
  return (
    <Layout title={'User Guide' + common_data.commonTitle} path='user_guide'>
      <div className={styles.ug_container}>
        <div className={styles.ug_subject}>{psString('guide-subj-main')}</div>

        <div className={styles.ug_content}>
          <div>{psString('guide-subj-1')}</div>
          {psString('guide-content-1')}
          <br />

          <div>{psString('guide-subj-2')}</div>
          {psString('guide-content-2')}
          <br />

          <div>{psString('guide-subj-3')}</div>
          {psString('guide-content-3')}
          <br />

          <div>{psString('guide-subj-4')}</div>
          {psString('guide-content-4')}
          <br />

          <div>{psString('guide-subj-5')}</div>
          {psString('guide-content-5')}
          <br />

          <div>{psString('guide-subj-6')}</div>
          {psString('guide-content-6')}
          <br />

          <div>{psString('guide-subj-7')}</div>
          {psString('guide-content-7')}
          <br />

          <div>{psString('guide-subj-8')}</div>
          {psString('guide-content-8')}
          <br />

          <div>{psString('guide-subj-9')}</div>
          {psString('guide-content-9')}
          <br />

          <div>{psString('guide-subj-10')}</div>
          {psString('guide-content-10')}
          <br />

          <div>{psString('guide-subj-11')}</div>
          {psString('guide-content-11')}
          <br />

          <div>{psString('guide-subj-12')}</div>
          {psString('guide-content-12')}
          <br />

          <div>{psString('guide-subj-13')}</div>
          {psString('guide-content-13')}
          <br />

          <div>{psString('guide-subj-14')}</div>
          {psString('guide-content-14')}
          <br />

          <div>{psString('guide-subj-15')}</div>
          {psString('guide-content-15')}
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default Guide
