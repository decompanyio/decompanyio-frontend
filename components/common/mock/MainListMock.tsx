import * as styles from "public/static/styles/main.scss"
import DocumentCardMock from "./DocumentCardMock"
import React from "react"

export default function() {
  return (
    <div className={styles.mlm_container}>
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
