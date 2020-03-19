import * as styles from 'public/static/styles/main.scss'
import DocumentCardMock from './DocumentCardMock'
import React, { ReactElement } from 'react'

export default function(): ReactElement {
  return (
    <div>
      <div className={styles.mlm_subjectWrapper}>
        <div className={styles.mlm_subject} />
      </div>

      <div className={styles.mlm_documentCardMockWrapper}>
        <DocumentCardMock order={1} />
        <DocumentCardMock order={2} />
        <DocumentCardMock order={3} />
        <DocumentCardMock order={4} />
      </div>
    </div>
  )
}
