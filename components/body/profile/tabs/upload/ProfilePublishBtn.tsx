import React, { ReactElement } from 'react'
import * as styles from '../../../../../public/static/styles/main.scss'
import { psString } from '../../../../../utils/localization'
import { useMain } from '../../../../../redux/main/hooks'
import { ProfilePublishBtnProps } from '../../../../../typings/interfaces'

export default function({
  documentData,
  convertState
}: ProfilePublishBtnProps): ReactElement {
  const { setModal } = useMain()

  const handlePublishBtnClick = () => setModal('publish', { documentData })

  if (documentData.isPublic || convertState !== 'CONVERT_COMPLETE')
    return <div />

  return (
    <div className={styles.puti_publishBtnWrapper}>
      <p
        data-tip={psString('tooltip-publish')}
        className={styles.puti_publishBtn}
        onClick={() => handlePublishBtnClick()}
      >
        {psString('common-modal-publish')}
      </p>
    </div>
  )
}
