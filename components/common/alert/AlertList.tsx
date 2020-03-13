import Alert from './Alert'
import React, { ReactElement, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActionMain } from '../../../redux/reducer/main'
import * as styles from 'public/static/styles/main.scss'

let arr: { html: string; code: number; serial: number }[] = [
  {
    html: '',
    code: 0,
    serial: 0
  }
]

export default function(): ReactElement {
  const dispatch = useDispatch()
  const alertCodeFromRedux = useSelector(state => state.main.alertCode)
  const alertDataFromRedux = useSelector(state => state.main.alertData)
  const [container, setContainer] = useState(arr)
  const [deleteFlag, setDeleteFlag] = useState(false)

  // Alert 렌더 여부 체크
  const checkRender = () =>
    new Promise((resolve, reject) => {
      if (
        alertCodeFromRedux &&
        (container.length === 0 ||
          (container.length > 0 &&
            container[container.length - 1].code !== alertCodeFromRedux))
      ) {
        resolve()
      } else {
        reject()
      }
    })

  // 랜더링 준비작업
  const handleRender = () =>
    new Promise(resolve => {
      if (container.length === 3) {
        const tempContainer = container
        tempContainer.shift()
        resolve(tempContainer)
      } else {
        resolve(container)
      }
    })

  // 닫기 버튼 관리
  const handleClose = (serial: number): void => {
    for (let i = 0; i < container.length; ++i) {
      if (container[i].serial === serial) {
        const tempContainer = container
        tempContainer.splice(i, 1)

        setContainer(tempContainer.length === 0 ? arr : tempContainer)
        setDeleteFlag(true)
      }
    }
  }

  // alert 배열 push
  const handlePushAlert = (serial: number): ReactElement => {
    return (
      <Alert
        code={alertCodeFromRedux}
        close={() => handleClose(serial)}
        alertData={alertDataFromRedux}
      />
    )
  }
  // 컨테이너 셋팅 작업
  const handleContainer = _container =>
    new Promise(resolve => {
      let serial = _container.length + alertCodeFromRedux
      let tempContainer = _container

      tempContainer.push({
        html: handlePushAlert(serial),
        code: alertCodeFromRedux,
        serial: _container.length + alertCodeFromRedux
      })

      setContainer(tempContainer)
      resolve()
    })

  useEffect(() => {
    checkRender()
      .then(() => handleRender())
      .then((_container: any) => handleContainer(_container))
      .then(() => dispatch(setActionMain.alertCode(null, {})))
      .catch(() => false)

    if (deleteFlag) setDeleteFlag(false)
  })

  return (
    <div className={styles.al_container}>
      <span className="d-none">
        {alertCodeFromRedux}
        {deleteFlag}
      </span>
      {container &&
        container.map((arrData: any, idx: number) => (
          <span key={idx}>{arrData.html}</span>
        ))}
    </div>
  )
}
