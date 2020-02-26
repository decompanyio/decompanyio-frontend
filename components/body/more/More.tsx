import * as styles from "public/static/styles/main.scss"
import Link from "next/link"
import React from "react"

type Type = {
  tagList: []
}

export default function({ tagList }: Type) {
  return (
    <div className={styles.more_container}>
      <div className={styles.more_subject}>More tags</div>
      <div className={styles.more_content}>
        {tagList &&
          tagList.length > 0 &&
          tagList.sort().map((result, idx) => (
            <Link href="/contents_list" as={"/tag/" + result} key={idx}>
              <a className={styles.more_item}># {result}</a>
            </Link>
          ))}
      </div>
    </div>
  )
}
