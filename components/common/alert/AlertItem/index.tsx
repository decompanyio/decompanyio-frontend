import React, { ReactElement, useEffect, useState } from 'react'
import { psString } from '../../../../utils/localization'
import * as styles from 'public/static/styles/scss/index.scss'
import commonData from '../../../../common/commonData'
import { AlertProps } from '../../../../typings/interfaces'
import { useMain } from '../../../../redux/main/hooks'

// 메세지 GET
const getMsg = (code: number): string => psString('alert-' + code)

// 상태값 GET
const getStatus = (
  code: number,
  alertData,
  myInfoFromRedux
): { status: string; msg: string; sub: string } => {
  let msg = ''
  let sub = ''
  let status = ''

  const setStatusData = (
    _code: number,
    _status: string,
    _sub?: string
  ): void => {
    msg = getMsg(_code) || ''
    status = _status || ''
  }

  switch (code) {
    // =============================================
    // 클라이언트 단 상태코드
    // =============================================

    // 시스템 메세지 2000~
    case 2001:
      setStatusData(code, 'error')
      break

    case 2002:
      setStatusData(code, 'error') // 잘못된 접근경로
      break

    case 2003:
      setStatusData(code, 'warning') // 로그인 필요
      break

    case 2004:
      setStatusData(code, 'error') // 로그인 실패
      break

    case 2005:
      setStatusData(code, 'success') // 복사 성공
      break

    case 2006:
      setStatusData(code, 'warning') // 서비스 워커 재시작
      break

    case 2007:
      setStatusData(code, 'error') // 복사 실패
      break

    // 이메일 메세지 2021~
    case 2021:
      setStatusData(code, 'success') // 이메일 검증 성공
      break

    case 2022:
      setStatusData(code, 'error') // 이메일 검증 실패
      break

    case 2023:
      setStatusData(code, 'warning') // 이메일 이미 검증
      break

    case 2024:
      setStatusData(code, 'warning') // 잘못된 검증 코드
      break

    // 지갑 메세지 2051~
    case 2031:
      setStatusData(code, 'warning') // 클레임 금액 부족
      break

    case 2032:
      setStatusData(code, 'error') // 클레임 실패
      break

    case 2033:
      setStatusData(code, 'success') // 클레임 성공
      break

    // 업로드 메세지 2071~
    case 2071:
      setStatusData(code, 'error') // 업로드 싪패
      break
    case 2072:
      setStatusData(code, 'error') // 비공개 문서 허용 5개 초과
      break
    case 2073:
      setStatusData(code, 'error') // 문서 삭제 실패
      break
    case 2074:
      setStatusData(code, 'success') // 비공개 문서 개수
      sub =
        psString('alert-2074-sub-a') +
        myInfoFromRedux.privateDocumentCount +
        psString('alert-2074-sub-b')
      break
    case 2075:
      setStatusData(code, 'success') // 컴파일 성공
      sub = alertData.title
      break
    case 2076:
      setStatusData(code, 'success') // 문서 삭제 성공
      break
    case 2077:
      setStatusData(code, 'success') // 문서 업로드 성공
      sub =
        psString('alert-2074-sub-a') +
        myInfoFromRedux.privateDocumentCount +
        psString('alert-2074-sub-b')
      break
    case 2078:
      setStatusData(code, 'error') // 컴파일 실패
      sub = alertData.title
      break
    case 2079:
      setStatusData(code, 'error') // 확장자 미허용
      break

    // 문서 관련 메세지 2091~
    case 2091:
      setStatusData(code, 'error') // 다운로드 싪패
      break
    case 2092:
      setStatusData(code, 'error') // 문서 업로드 싪패
      break
    case 2093:
      setStatusData(code, 'error') // 투표 싪패
      break

    // 북마크 관련 메세지 2121~
    case 2121:
      setStatusData(code, 'success') // 찜 등록 성공
      break
    case 2122:
      setStatusData(code, 'error') // 북마크 에러
      break
    case 2123:
      setStatusData(code, 'success') // 찜 목록 삭제
      break
    case 2124:
      setStatusData(code, 'error') // 찜 목록 삭제
      break

    // 프로필 관련 메세지 2141~
    case 2141:
      setStatusData(code, 'success') // 유저네임 수정 성공
      break
    case 2142:
      setStatusData(code, 'error') // 유저네임 수정 실패
      break
    case 2143:
      setStatusData(code, 'success') // 프로필 이미지 수정 성공
      break
    case 2144:
      setStatusData(code, 'error') // 프로필 이미지 수정 실패
      break
    case 2145:
      setStatusData(code, 'error') // 프로필 이미지 수정 파일 타입 에러
      break

    // 검색 관련 메세지 2151~
    case 2151:
      setStatusData(code, 'error') // 검색할 태그 없음
      break

    // =============================================
    // 서버 단 상태코드
    // =============================================

    default:
      break
  }

  return { status, msg, sub }
}

export default function AlertItem({
  code,
  alertData,
  close
}: AlertProps): ReactElement {
  const { myInfo } = useMain()
  const [data] = useState(getStatus(code, alertData, myInfo))

  useEffect(() => {
    let _setTimeout = setTimeout(() => {
      close()
      clearInterval(_setTimeout)
    }, commonData.alertRemainTime)
  }, [])

  let alertStatus = 'a_' + data.status

  return (
    <div className={styles[alertStatus]}>
      <div className={styles.a_wrapper}>
        <span>
          <i className="material-icons">
            {data.status === 'success' ? 'check' : data.status}
          </i>
        </span>
        <span>{data.msg}</span>
        <i
          className={'material-icons ' + styles.a_close}
          title="close"
          onClick={(): Function => close()}
        >
          close
        </i>
      </div>

      {data.sub !== '' && <div className={styles.a_explain}>{data.sub}</div>}
    </div>
  )
}
