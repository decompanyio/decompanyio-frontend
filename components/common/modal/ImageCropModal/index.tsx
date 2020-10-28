import React, { ReactElement, useEffect, useState } from 'react'
import Cropper from 'react-easy-crop'
import { FadingCircle } from 'better-react-spinkit'
import * as styles from 'public/static/styles/scss/index.scss'
import commonView from 'common/commonView'
import repos from 'utils/repos'
import { APP_CONFIG } from '../../../../app.config'
import { psString } from 'utils/localization'
import common from 'common/common'
import { useMain } from '../../../../redux/main/hooks'

// 파일 읽기
const readFile = file =>
  new Promise(resolve => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })

export default function ImageCropModal(): ReactElement {
  const { modalData, myInfo, setModal, setAlertCode, setMyInfo } = useMain()

  const tempModalData = modalData as any
  const file = tempModalData && tempModalData.file ? tempModalData.file : null

  const [closeFlag, setCloseFlag] = useState(false)
  const [loading, setLoading] = useState(false)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [croppedArea, setCroppedArea] = useState({} as any)
  const [image, setImage] = useState({} as any)
  const [zoom, setZoom] = useState(null)

  const style = {
    containerStyle: {
      background: 'none'
    },
    cropAreaStyle: {
      color: '#7171715c'
    }
  }
  const aspect = 1

  // crop change check
  const onCropChange = crop => {
    setCrop(crop)
  }

  // crop zoom complete check
  const onCropComplete = (_croppedArea, croppedAreaPixels) =>
    setCroppedArea(croppedAreaPixels)

  // crop zoom change check
  const onZoomChange = zoom => {
    setZoom(zoom)
  }

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () =>
    new Promise(resolve => resolve(setCloseFlag(true)))

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => setModal(''))

  // 자르기 확인
  const handleCropConfirm = () => {
    if (croppedArea === {} || !file) return false

    setLoading(true)

    // profileUpload url GET
    repos.Account.getProfileImageUploadUrl()
      .then(result => {
        let params = {
          file: file,
          signedUrl: result.signedUploadUrl
        }

        // 이미지 서버에 업로드
        repos.Account.profileImageUpload(params).then(() => {
          let url = APP_CONFIG.domain().profile + result.picture
          let _croppedArea = croppedArea
          _croppedArea.zoom = zoom
          let data = {
            picture: url,
            croppedArea: _croppedArea
          }

          // 유저 정보 업데이트
          repos.Account.updateProfileImage(data)
            .then(() => {
              const _myInfo = myInfo
              _myInfo.picture = url
              _myInfo.croppedArea = croppedArea

              setLoading(true)
              setAlertCode(2143, {})
              setMyInfo(_myInfo)

              return handleClickClose()
            })
            .catch(() => setAlertCode(2144, {}))
        })
      })
      .catch(err => {
        console.error(err)
        return handleClickClose()
      })
  }

  useEffect(() => {
    commonView.setBodyStyleLock()
    ;(async function() {
      let _file = await readFile(file)

      // 모달 오픈 에니메이션 delay
      let timeout = setTimeout(() => {
        setImage(_file)
        clearTimeout(timeout)
      }, 200)
    })()

    return () => {
      commonView.setBodyStyleUnlock()
    }
  })

  return (
    <div className={styles.modal_container}>
      <div
        className={
          styles.modal_body + ' ' + (closeFlag ? styles.modal_hide : '')
        }
      >
        <div className={styles.modal_title}>
          <i
            className={'material-icons ' + styles.modal_closeBtn}
            onClick={() => handleClickClose()}
          >
            close
          </i>
          <h3>{psString('image-crop-modal-subject')}</h3>
        </div>

        <div className={styles.icm_content}>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            style={style}
            cropShape="round"
            showGrid={false}
            onCropChange={onCropChange}
            onCropComplete={onCropComplete}
            onZoomChange={onZoomChange}
          />
        </div>

        <div className={styles.modal_footer}>
          <div
            onClick={() => handleClickClose()}
            className={styles.modal_cancelBtn}
          >
            {psString('common-modal-cancel')}
          </div>
          <div
            onClick={() => handleCropConfirm()}
            className={
              styles.modal_okBtn +
              ' ' +
              (loading && styles.icm_common_disabledBtn)
            }
          >
            {loading && (
              <div className={styles.edm_loadingWrapper}>
                <FadingCircle color="#3681fe" size={17} />
              </div>
            )}
            {psString('common-modal-confirm')}
          </div>
        </div>
      </div>
    </div>
  )
}
