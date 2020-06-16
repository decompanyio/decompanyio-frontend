import React, { ReactElement, useEffect } from 'react'
import commonView from '../../../common/commonView'
import { APP_CONFIG } from '../../../app.config'

export default function({ idx }): ReactElement {
  useEffect(() => {
    commonView.lazyLoading()
  })

  return (
    <img
      src={'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D'}
      data-src={
        APP_CONFIG.domain().static +
        '/image/banner/img-banner-0' +
        (idx + 1) +
        '.png'
      }
      data-srcset={
        'https://res.share.decompany.io/static/image/banner/img-banner-0' +
        (idx + 1) +
        '.png' +
        ' 1x'
      }
      alt="main banner"
      className={'lazy '}
      onError={e => {
        let element = e.target as HTMLImageElement
        element.onerror = null
        element.src =
          'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D'
      }}
    />
  )
}
