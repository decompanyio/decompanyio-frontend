import React, { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { setActionMain } from '../../../redux/reducer/main'
import * as styles from 'public/static/styles/main.scss'

interface ProfileAvatarEdit {
  owner: boolean
}

export default function({ owner }: ProfileAvatarEdit): ReactElement {
  const dispatch = useDispatch()

  const handleUploadBtnClick = (): void => {
    const el = document.getElementById('imgFile') as HTMLElement
    el.click()
  }

  const handleImageFileChange = (e): void => {
    if (e && e.length > 0) {
      const type = e[0].type.split('/')[0]

      if (type === 'image') {
        dispatch(setActionMain.modal('imageCrop', { file: e[0] }))
      } else {
        dispatch(setActionMain.alertCode(2145, {}))
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
          onClick={(e: { target }): void => {
            e.target.value = null
          }}
        />
      )}
    </div>
  )
}
