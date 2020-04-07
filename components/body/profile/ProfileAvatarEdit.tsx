import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/main.scss'
import { ProfileAvatarEditProps } from '../../../typings/interfaces'
import { useMain } from '../../../redux/main/hooks'

export default function({ owner }: ProfileAvatarEditProps): ReactElement {
  const { setModal, setAlertCode } = useMain()
  const handleUploadBtnClick = (): void => {
    const el = document.getElementById('imgFile') as HTMLElement
    el.click()
  }

  const handleImageFileChange = (e: any): void => {
    if (e && e.length > 0) {
      const type = e[0].type.split('/')[0]

      if (type === 'image') {
        setModal('imageCrop', { file: e[0] })
      } else {
        setAlertCode(2145, {})
      }
    }
  }

  return (
    <div>
      {owner && (
        <div className={styles.pae_wrapper} onClick={handleUploadBtnClick}>
          <i className="material-icons">edit</i>
        </div>
      )}
      {owner && (
        <input
          type="file"
          id="imgFile"
          accept="image/*"
          onChange={(e): void => handleImageFileChange(e.target.files)}
          onClick={(e: any): void => {
            e.target.value = null
          }}
        />
      )}
    </div>
  )
}
