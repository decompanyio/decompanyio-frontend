import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { APP_CONFIG } from '../../../../app.config'
import commonData from '../../../../common/commonData'
import common from '../../../../common/common'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { MainThirdSectionTopItemProps } from '../../../../typings/interfaces'

// UserAvatar - No SSR
const UserAvatarWithoutSSR = dynamic(
  () => import('components/common/avatar/UserAvatar'),
  { ssr: false }
)

export default function MainThirdSectionTopItem({
  documentData,
  documentRoyalty
}: MainThirdSectionTopItemProps): ReactElement {
  let imgUrl_1 = common.getThumbnail(
    documentData.id,
    320,
    1,
    documentData.documentName
  )
  let imgUrl_2 = common.getThumbnail(
    documentData.id,
    640,
    1,
    documentData.documentName
  )
  let vote = common.deckStr(common.toEther(documentData.latestVoteAmount) || 0)
  let ratio = common.getRatio(
    documentData.dimensions.width,
    documentData.dimensions.height
  )

  return (
    <div className={styles.mtli_container}>
      <Link
        href={{
          pathname: '/contents_view',
          query: { seoTitle: documentData.seoTitle }
        }}
        as={`/@${documentData.author.username}/${documentData.seoTitle}`}
      >
        <a aria-label="viewer page">
          <div className={styles.mtli_thumb}>
            <img
              src={commonData.dummyImage.gray}
              data-src={imgUrl_1}
              data-srcset={imgUrl_1 + ' 320w, ' + imgUrl_2 + ' 640w'}
              sizes="320w"
              alt={documentData.title}
              className={
                'lazy ' +
                (ratio >= 1.6 ? styles.mtli_imgLandscape : styles.mtli_img)
              }
              onError={e => {
                // console.log(e)
                let element = e.target as HTMLImageElement
                element.onerror = null
                element.srcset =
                  APP_CONFIG.domain().static + '/image/logo-cut.png'
              }}
            />
            <span>{common.localeToCountry(documentData.locale)}</span>
          </div>
        </a>
      </Link>
      <div className={styles.mtli_content}>
        <p className={styles.mtli_title}>
          <Link
            href={{
              pathname: '/contents_view',
              query: { seoTitle: documentData.seoTitle }
            }}
            as={`/@${documentData.author.username}/${documentData.seoTitle}`}
          >
            <a aria-label="viewer page">{documentData.title}</a>
          </Link>
        </p>
        <div className={styles.mtli_contentItemWrapper}>
          <div>
            <i className={styles.sprite_a} />
            <span className={styles.mtli_money}>
              {documentRoyalty === 0
                ? 'FREE'
                : common.deckToDollarWithComma(documentRoyalty)}
            </span>
          </div>
          <div>
            <i className={styles.sprite_b} />
            <span className={styles.mtli_number}>0</span>
          </div>
          <div>
            <i className={styles.sprite_c} />
            <span className={styles.mtli_number}>{vote}</span>
          </div>
        </div>
        <div className={styles.mtli_infoContainer}>
          <Link
            href={{
              pathname: '/profile_page',
              query: { identification: documentData.author.username }
            }}
            as={`/@${documentData.author.username}`}
          >
            <a rel="nofollow" aria-label="profile page">
              <div className={styles.mtli_info}>
                <span className={styles.mtli_avatar}>
                  <UserAvatarWithoutSSR
                    picture={documentData.author.picture}
                    croppedArea={documentData.author.croppedArea}
                    size={30}
                  />
                </span>
                <span className={styles.mtli_id}>
                  {documentData.author.username}
                </span>
              </div>
            </a>
          </Link>
          {/*<p className={styles.mtli_time}>
            {commonView.dateTimeAgo(documentData.created, isMobile)}
            <br />
            (for 4 weeks)
          </p>*/}
        </div>
      </div>
    </div>
  )
}
