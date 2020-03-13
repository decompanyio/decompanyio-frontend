import * as styles from 'public/static/styles/main.scss'
import React, { ReactElement, useEffect, useState } from 'react'

/*일반 유저 아바타
picture, croppedArea, size, (click) 지정하여 사용*/

// 이미지 정보 GET
const getImgInfo = picture =>
  new Promise(resolve => {
    let img = new Image()
    img.src = picture
    img.onload = () => resolve(Boolean(img.height > img.width))
  })

interface MyAvatarProps {
  croppedArea
  size: number
  picture: string
  click?: () => void
}

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
    getImgInfo(picture).then(imgInfo => {
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
          src={picture}
          alt="profile"
          style={imgStyle}
          onError={e => {
            let element = e.target as HTMLImageElement
            element.onerror = null
            element.src = require('public/static/image/icon/i_profile-default.png')
          }}
        />
      ) : (
        <img
          src={require('public/static/image/icon/i_profile-default.png')}
          className={styles.ma_avatar}
          alt="Link to my profile"
        />
      )}
    </div>
  )
}
