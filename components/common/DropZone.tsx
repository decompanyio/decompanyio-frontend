import * as styles from 'public/static/styles/main.scss'
import Dropzone from 'react-dropzone'
import { useSelector } from 'react-redux'
import { psString } from '../../utils/localization'
import { useState } from 'react'

type Type = {
  handleFileChange: any
  fileInfoError: any
}

export default function({ handleFileChange, fileInfoError }: Type) {
  const isMobile = useSelector(state => state.main.isMobile)
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
          <input {...getInputProps()} />
          {file.length > 0 ? (
            <div>{_files}</div>
          ) : (
            <div className='p-3'>
              <i className='material-icons'>cloud_upload</i>
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
