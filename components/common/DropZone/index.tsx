import * as styles from 'public/static/styles/scss/index.scss'
import Dropzone from 'react-dropzone'
import { psString } from '../../../utils/localization'
import React, { ReactElement, useState } from 'react'
import { DropZoneProps } from '../../../typings/interfaces'
import { useMain } from '../../../redux/main/hooks'

export default function DropZone({
  handleFileChange,
  fileInfoError
}: DropZoneProps): ReactElement {
  const { isMobile } = useMain()
  const [file, setFile] = useState([])
  const [dragOver, setDragOver] = useState(false)

  const onDrop = f => {
    if (f !== file) {
      setFile(f)
      handleFileChange(f)
    }
  }

  const onDragLeave = () => {
    if (dragOver) setDragOver(false)
  }

  const onDragOver = () => {
    if (!dragOver) setDragOver(true)
  }

  const _files = file.map((file: any) => (
    <div key={file.name}>
      <div className={styles.dz_info}>{file.name}</div>
    </div>
  ))

  return (
    <Dropzone onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}>
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps({
            className:
              styles.dz_container +
              ' ' +
              (fileInfoError.length > 0 ? ' tag-input-warning ' : '') +
              (dragOver && styles.dz_over)
          })}
        >
          <input
            {...getInputProps()}
            accept=".pdf,.hwp,.doc, .docx,.ppt, .pptx"
          />
          {file.length > 0 ? (
            <div>{_files}</div>
          ) : (
            <div className="p-3">
              <i className="material-icons">cloud_upload</i>
              <div>
                {isMobile
                  ? psString('content-add-click')
                  : psString('content-add-drag-drop')}
              </div>
              <div />
            </div>
          )}
        </div>
      )}
    </Dropzone>
  )
}
