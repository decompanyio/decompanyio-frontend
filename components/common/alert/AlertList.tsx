import Alert from './Alert'
import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { useMain } from '../../../redux/main/hooks'

let arr: { html: string; code: number; serial: number }[] = [
  {
    html: '',
    code: 0,
    serial: 0
  }
]

export default function(): ReactElement {
  const { alertCode, alertData, setAlertCode } = useMain()
  const [container, setContainer] = useState(arr)
  const [deleteFlag, setDeleteFlag] = useState(false)

  const checkRendered = () =>
    new Promise((resolve, reject) => {
      if (
        alertCode !== -1 &&
        (container.length === 0 ||
          (container.length > 0 &&
            container[container.length - 1].code !== alertCode))
      ) {
        resolve()
      } else {
        reject()
      }
    })

  const readyForRendering = () =>
    new Promise(resolve => {
      if (container.length === 3) {
        const tempContainer = container
        tempContainer.shift()
        resolve(tempContainer)
      } else {
        resolve(container)
      }
    })

  const handleCloseBtnClick = (serial: number): void => {
    for (let i = 0; i < container.length; ++i) {
      if (container[i].serial === serial) {
        const tempContainer = container
        tempContainer.splice(i, 1)

        setContainer(tempContainer.length === 0 ? arr : tempContainer)
        setDeleteFlag(true)
      }
    }
  }

  const pushAlertCompToArrayList = (serial: number): ReactElement => {
    return (
      <Alert
        code={alertCode}
        close={() => handleCloseBtnClick(serial)}
        alertData={alertData}
      />
    )
  }

  const setContainerRequired = _container =>
    new Promise(resolve => {
      let serial = _container.length + alertCode
      let tempContainer = _container

      tempContainer.push({
        html: pushAlertCompToArrayList(serial),
        code: alertCode,
        serial: _container.length + alertCode
      })

      setContainer(tempContainer)
      resolve()
    })

  useEffect(() => {
    checkRendered()
      .then(() => readyForRendering())
      .then((_container: any) => setContainerRequired(_container))
      .then(() => setAlertCode(-1, {}))
      .catch(() => false)

    if (deleteFlag) setDeleteFlag(false)
  })

  return (
    <div className={styles.al_container}>
      <span>
        {alertCode}
        {deleteFlag}
      </span>
      {container &&
        container.map((arrData: any, idx: number) => (
          <span key={idx}>{arrData.html}</span>
        ))}
    </div>
  )
}
