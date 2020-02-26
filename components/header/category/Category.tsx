import * as styles from "public/static/styles/main.scss"
import Link from "next/link"
import React from "react"

const categoryRanked = [
  "marketing",
  "business",
  "technology",
  "health",
  "food",
  "education",
  "design"
]

export default function() {
  return (
    <nav className={styles.c_wrapper} id="headerCategoryWrapper">
      <ul className={styles.c_tagsMenu}>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>

        {categoryRanked.map((arr, idx) => (
          <li key={idx}>
            <Link
              href={{ pathname: "/contents_list", query: { tag: arr } }}
              as={"tag/" + arr}
            >
              <a>{arr}</a>
            </Link>
          </li>
        ))}

        <li>
          <Link href="/more" as="m">
            <a>more</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
