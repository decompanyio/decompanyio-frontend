import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as styles from 'public/static/styles/main.scss'
import Layout from '../components/Layout'
import { APP_CONFIG } from '../app.config'
import { AUTH_APIS } from '../utils/auth'

function index(props) {
  const [at, setAt] = useState('')
  const [rt, setRt] = useState('')
  const [testResult, setTestResult] = useState('')
  const [refresh, setRefresh] = useState(false)

  // CC License by 체크박스
  const handleCcByCheckbox = () => setRefresh(!refresh)

  function getQueryParams(qs) {
    const _qs = qs.split('+').join(' ')
    const re = /[?&]?([^=]+)=([^&]*)/g

    let params = {
      error: '',
      authorization_token: '',
      refresh_token: ''
    }

    let tokens

    // tslint:disable-next-line
    while ((tokens = re.exec(_qs))) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2])
    }
    return params
  }

  function saveResponse(at, rt) {
    // Save token to local storage for later use
    if (at) {
      localStorage.setItem('authorization_token', at)
    }
    if (rt) {
      localStorage.setItem('refresh_token', rt)
    }

    setAt(`${localStorage.getItem('authorization_token')}`)
    setRt(`${localStorage.getItem('refresh_token')}`)
  }

  function refreshToken() {
    setTestResult('Loading...')
    console.log('refreshToken')
    // refresh token
    axios({
      method: 'GET',
      url: `${
        APP_CONFIG.domain().auth
      }/authentication/refresh/${localStorage.getItem('refresh_token')}`
    })
      .then((res: any) => {
        if (res.errorMessage) {
          setTestResult(res.errorMessage)
        } else {
          saveResponse(res.data.authorization_token, res.data.refresh_token)
          testToken()
        }
      })
      .catch(() => {
        setTestResult('Unauthorized')
      })
  }

  function testToken() {
    const authorizationToken = localStorage.getItem('authorization_token')

    console.log(authorizationToken)

    if (authorizationToken) {
      setTestResult('Loading...')
      // set token to Authorization header
      axios({
        method: 'GET',
        url: `${APP_CONFIG.domain().authTest}`,
        headers: {
          Authorization: authorizationToken
        }
      })
        .then(data => {
          console.log(1)
          setTestResult(JSON.stringify(data))
        })
        .catch(() => {
          console.log(2)
          // @ts-ignore
          if (refresh) {
            setTestResult('Refreshing token...')
            refreshToken()
          } else {
            setTestResult('Unauthorized')
          }
        })
    } else {
      console.log('3')
      setTestResult('Unauthorized')
    }
  }

  useEffect(() => {
    const query = getQueryParams(document.location.search)

    if (query.error) {
      setAt(query.error)
      localStorage.removeItem('authorization_token')
      localStorage.removeItem('refresh_token')
    } else {
      const aToken = query.authorization_token || ''
      const rToken = query.refresh_token || ''

      saveResponse(aToken, rToken)
      // trigger test token
      testToken()
    }
  }, [])

  return (
    <Layout title={'Loading . . .'} path='callback' {...props}>
      <div className='main'>
        <style>
          {`
          .main {
          width: 100%;
          padding: 20px
          }

            h2 {
            color: #666666;
            font-weight: bold;
            text-align: center;
            margin: 40px;
            }
            h3 {
            color: #666666;
            margin: 20px 20px 0px 20px;
            }
            .providers {
            padding: 20px;
            width: 100%;
            margin-bottom: 60px;
            }
            #logout {
            border-color: red;
            color: red;
            }
            .responseWrapper {
            padding: 10px 20px;
            margin-bottom: 60px;
            }
            .response {
            position: relative;
            width: 100%;
            padding: 5px;
            word-break: break-all;
            margin: 10px 0;
            border: 1px solid black;
            background: #f5f5f5;
            }
            .testWrapper{
                padding: 10px 20px;
            margin-bottom: 60px;
            }
            `}
        </style>
        <h2>Serverless Authentication Test Page</h2>
        <h3>Providers</h3>
        <div className='providers'>
          <div
            className={styles.vtb_voteBtn}
            onClick={() => AUTH_APIS.testLogin('facebook')}
          >
            페이스북
          </div>
          <div
            className={styles.vtb_voteBtn}
            onClick={() => AUTH_APIS.testLogin('google')}
          >
            구글
          </div>
          <div
            className={styles.vtb_voteBtn}
            onClick={() => AUTH_APIS.testLogin('microsoft')}
          >
            마이크로소프트
          </div>
          <div
            className={styles.vtb_voteBtn}
            id='custom-google'
            onClick={() => AUTH_APIS.testLogin('custom-google')}
          >
            커스텀 구글
          </div>

          <div
            id='logout'
            className={styles.vtb_voteBtn}
            onClick={() => AUTH_APIS.testLogout()}
          >
            로그아웃
          </div>
        </div>
        <h3>Response</h3>
        <div className='responseWrapper'>
          authorization_token:
          <div id='token' className='response'>
            {at}
          </div>
          refresh_token:
          <div id='token' className='response'>
            {rt}
          </div>
        </div>
        <h3>Test</h3>
        <div className='testWrapper'>
          <p>
            The authorization token is valid for 15 seconds, if the auto refresh
            is checked, refresh token is used to request new authorization
            token.
          </p>
          <div className='testers'>
            <div className={styles.vtb_voteBtn} onClick={() => testToken()}>
              Test token
            </div>
            <div className={styles.vtb_voteBtn} onClick={() => refreshToken()}>
              Refresh token
            </div>
              <input
                type='checkbox'
                id='autoRefresh'
                onChange={() => handleCcByCheckbox()}
                checked={refresh}
              />
              <label htmlFor='autoRefresh'>
                <span>
                  <i className='material-icons'>done</i>
                </span>
                Auto refresh token
              </label>
          </div>
          <div id='test-result' className='response'>
            {testResult}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
