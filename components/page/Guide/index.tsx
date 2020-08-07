import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import React, { ReactElement } from 'react'
export default function Guide(): ReactElement {
  return (
    <div>
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

      <div className={styles.faq_container}>
        <div className={styles.faq_subject}>FAQ</div>

        <div className={styles.faq_content}>
          <div>{psString('faq-question-1')}</div>
          {psString('faq-answer-1')}
          <br />

          <div>{psString('faq-question-2')}</div>
          {psString('faq-answer-2')}
          <br />

          <div>{psString('faq-question-3')}</div>
          {psString('faq-answer-3')}
          <br />

          <div>{psString('faq-question-4')}</div>
          {psString('faq-answer-4a')}
          <br />
          {psString('faq-answer-4b')}
          <br />
          {psString('faq-answer-4c')}
          <br />

          <div>{psString('faq-question-5')}</div>
          {psString('faq-answer-5a')}
          <br />
          {psString('faq-answer-5b')}
          <br />

          <div>{psString('faq-question-6')}</div>
          {psString('faq-answer-6a')}
          <br />
          {psString('faq-answer-6b')}
          <br />
          {psString('faq-answer-6c')}
          <br />

          <div>{psString('faq-question-7')}</div>
          {psString('faq-answer-7')}
          <br />

          <div>{psString('faq-question-8')}</div>
          {psString('faq-answer-8')}
          <br />

          <div>{psString('faq-question-9')}</div>
          {psString('faq-answer-9')}
          <br />

          <div>{psString('faq-question-10')}</div>
          {psString('faq-answer-10')}
          <br />

          <div>{psString('faq-question-11')}</div>
          {psString('faq-answer-11')}
          <br />

          <div>{psString('faq-question-12')}</div>
          {psString('faq-answer-12')}
          <br />

          <div>{psString('faq-question-13')}</div>
          {psString('faq-answer-13')}
          <br />

          <div>{psString('faq-question-14')}</div>
          {psString('faq-answer-14')}
          <br />

          <div>{psString('faq-question-15')}</div>
          {psString('faq-answer-15')}
          <br />

          <div>{psString('faq-question-16')}</div>
          {psString('faq-answer-16')}
          <br />

          <div>{psString('faq-question-17')}</div>
          {psString('faq-answer-17')}
          <br />

          <div>{psString('faq-question-18')}</div>
          {psString('faq-answer-18')}
          <br />
        </div>
      </div>
    </div>
  )
}
