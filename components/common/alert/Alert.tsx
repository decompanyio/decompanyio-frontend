import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { psString } from '../../../utils/localization'
import * as styles from 'public/static/styles/main.scss'
import common_data from '../../../common/common_data'

type Type = {
  code: number
  alertData: any
  close: any
}

// 메세지 GET
const getMsg = code => psString('alert-' + code)

// 상태값 GET
const getStatus = (code: number, alertData: any, myInfoFromRedux: any) => {
  let msg = ''
  let sub = ''
  let status = ''

  switch (code) {
    // =============================================
    // 클라이언트 단 상태코드
    // =============================================

    // 시스템 메세지 2000~
    case 2001:
      status = 'error'
      msg = getMsg(code) // 네트워크 에러
      break

    case 2002:
      status = 'error'
      msg = getMsg(code) // 잘못된 접근경로
      break

    case 2003:
      status = 'warning'
      msg = getMsg(code) // 로그인 필요
      break

    case 2004:
      status = 'error'
      msg = getMsg(code) // 로그인 실패
      break

    case 2005:
      status = 'success'
      msg = getMsg(code) // 복사 성공
      break

    case 2006:
      status = 'warning'
      msg = getMsg(code) // 서비스 워커 재시작
      break

    case 2007:
      status = 'error'
      msg = getMsg(code) // 복사 실패
      break

    // 이메일 메세지 2021~
    case 2021:
      status = 'success'
      msg = getMsg(code) // 이메일 검증 성공
      break

    case 2022:
      status = 'error'
      msg = getMsg(code) // 이메일 검증 실패
      break

    case 2023:
      status = 'warning'
      msg = getMsg(code) // 이메일 이미 검증
      break

    case 2024:
      status = 'warning'
      msg = getMsg(code) // 잘못된 검증 코드
      break

    // 지갑 메세지 2051~
    case 2031:
      status = 'warning'
      msg = getMsg(code) // 클레임 금액 부족
      break

    case 2032:
      status = 'error'
      msg = getMsg(code) // 클레임 실패
      break

    case 2033:
      status = 'success'
      msg = getMsg(code) // 클레임 성공
      break

    // 업로드 메세지 2071~
    case 2071:
      status = 'error'
      msg = getMsg(code) // 업로드 싪패
      break
    case 2072:
      status = 'error'
      msg = getMsg(code) // 비공개 문서 허용 5개 초과
      break
    case 2073:
      status = 'error'
      msg = getMsg(code) // 문서 삭제 실패
      break
    case 2074:
      status = 'success'
      msg = getMsg(code) // 비공개 문서 개수
      sub =
        psString('alert-2074-sub-a') +
        myInfoFromRedux.privateDocumentCount +
        psString('alert-2074-sub-b')
      break
    case 2075:
      status = 'success'
      msg = getMsg(code) // 컴파일 성공
      sub = alertData.title
      break
    case 2076:
      status = 'success'
      msg = getMsg(code) // 문서 삭제 성공
      break
    case 2077:
      status = 'success'
      msg = getMsg(code) // 문서 업로드 성공
      sub =
        psString('alert-2074-sub-a') +
        myInfoFromRedux.privateDocumentCount +
        psString('alert-2074-sub-b')
      break

    // 문서 관련 메세지 2091~
    case 2091:
      status = 'error'
      msg = getMsg(code) // 다운로드 싪패
      break

    // 북마크 관련 메세지 2121~
    case 2121:
      status = 'success'
      msg = getMsg(code) // 찜 등록 성공
      break
    case 2122:
      status = 'error'
      msg = getMsg(code) // 북마크 에러
      break
    case 2123:
      status = 'success'
      msg = getMsg(code) // 찜 목록 삭제
      break
    case 2124:
      status = 'error'
      msg = getMsg(code) // 찜 목록 삭제
      break

    // 프로필 관련 메세지 2141~
    case 2141:
      status = 'success'
      msg = getMsg(code) // 유저네임 수정 성공
      break
    case 2142:
      status = 'error'
      msg = getMsg(code) // 유저네임 수정 실패
      break
    case 2143:
      status = 'success'
      msg = getMsg(code) // 프로필 이미지 수정 성공
      break
    case 2144:
      status = 'error'
      msg = getMsg(code) // 프로필 이미지 수정 실패
      break
    case 2145:
      status = 'error'
      msg = getMsg(code) // 프로필 이미지 수정 파일 타입 에러
      break

    // =============================================
    // 서버 단 상태코드
    // =============================================

    default:
      break
  }

  return { status, msg, sub }
}

export default function({ code, alertData, close }: Type) {
  const myInfoFromRedux = useSelector(state => state.main.myInfo)
  const [data] = useState(getStatus(code, alertData, myInfoFromRedux))

  useEffect(() => {
    let _setTimeout = setTimeout(() => {
      close()
      clearInterval(_setTimeout)
    }, common_data.alertRemainTime)
  }, [])

  let alertStatus = 'a_' + data.status

  return (
    <div className={styles[alertStatus]}>
      <div className={styles.a_wrapper}>
        <span>
          <i className='material-icons'>
            {data.status === 'success' ? 'check' : data.status}
          </i>
        </span>
        <span>{data.msg}</span>
        <i
          className={'material-icons ' + styles.a_close}
          title='close'
          onClick={() => close()}
        >
          close
        </i>
      </div>

      {data.sub !== '' && <div className={styles.a_explain}>{data.sub}</div>}
    </div>
  )
}
