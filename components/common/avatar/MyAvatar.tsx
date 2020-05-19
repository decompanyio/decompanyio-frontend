import * as styles from 'public/static/styles/main.scss'
import React, { ReactElement, useEffect, useState } from 'react'
import { MyAvatarProps } from '../../../typings/interfaces'
import commonView from '../../../common/commonView';

/*일반 유저 아바타
picture, croppedArea, size, (click) 지정하여 사용*/

export default function({
  size,
  picture,
  croppedArea,
  click
}: MyAvatarProps): ReactElement {
  const [imgStyle, setImgStyle] = useState({
    width: '100%',
    height: 'auto',
    left: '0',
    top: '0'
  })

  let xLocation = 0
  let yLocation = 0
  let zoom = 1
  let wrapperStyle = {
    width: (size || 30) + 'px',
    height: (size || 30) + 'px'
  }

  useEffect(() => {
    commonView.getImgInfoOnPromise(picture).then(imgInfo => {
      if (croppedArea) {
        xLocation = Math.floor(
          (croppedArea.x || xLocation) /
            ((imgInfo ? croppedArea.height : croppedArea.width) / size)
        )
        yLocation = Math.floor(
          (croppedArea.y || yLocation) /
            ((imgInfo ? croppedArea.height : croppedArea.width) / size)
        )
        zoom = croppedArea.zoom || zoom
      }

      setImgStyle({
        width: !imgInfo ? 'auto' : Number(zoom * 100) + '%',
        height: imgInfo ? 'auto' : Number(zoom * 100) + '%',
        left: '-' + xLocation + 'px',
        top: '-' + yLocation + 'px'
      })
    })

    commonView.lazyLoading()
  }, [])

  const handleClick = () => click && click()

  return (
    <div
      className={styles.ua_container}
      style={wrapperStyle}
      onClick={() => handleClick()}
    >
      {picture.length > 0 ? (
        <img
          src={'/static/image/icon/i_profile-default.png'}
          data-src={picture}
          data-srcset={picture + ' 1x'}
          alt="profile"
          className={'lazy ' + imgStyle}
          style={imgStyle}
          onError={e => {
            let element = e.target as HTMLImageElement
            element.onerror = null
            element.srcset = '/static/image/icon/i_profile-default.png'
          }}
        />
      ) : (
        <img
          src={'/static/image/icon/i_profile-default.png'}
          className={styles['ma_avatar' + (size === 90 ? '_big' : '')]}
          alt="Link to my profile"
          onError={e => {
            let element = e.target as HTMLImageElement
            element.onerror = null
            element.src = '/static/image/icon/i_profile-default.png'
          }}
        />
      )}
    </div>
  )
}
