require('dotenv').config()

/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const next = require('next')
const { join } = require('path')
const { parse } = require('url')
const nanoidGen = require('nanoid/generate')
let cookieParser = require('cookie-parser')
/* eslint-disable @typescript-eslint/no-var-requires */

const version = process.env.npm_package_version
const env =
  process.env.NODE_ENV &&
  process.env.NODE_ENV.trim().toLowerCase() === 'production'
    ? 'production'
    : 'development'
const envSub = process.env.NODE_ENV_SUB || 'local'
const dev = env !== 'production'
const port = !dev ? 80 : 3000
const app = next({ dev })
const handle = app.getRequestHandler()
const profileRegEx =
  '(@(\\w)+|@(\\w)+[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3})'

const makeTrackingCookieResponse = (req, res) => {
  /*
    console.log("headers", req.headers);
    console.log("accepts", req.accepts);
    console.log('Cookies: ', JSON.stringify(req.cookies))
    console.log('Signed Cookies: ', JSON.stringify(req.signedCookies))
    */
  const getRandomId = () => {
    const id = nanoidGen(
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-',
      21
    ) //=> "4f90d13a42"
    return `${id}.${Date.now()}`
  }

  let _cid = req.cookies['_cid']
  let _sid = req.cookies['_sid']
  let _tid = req.cookies['_tid']

  if (!_cid) _cid = getRandomId()
  if (!_sid) _sid = getRandomId()
  if (!_tid) _tid = getRandomId()

  const secure = env === 'production'
  const domain = req.headers.host

  res.cookie('_tid', _tid, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: secure,
    path: '/',
    domain: domain
  }) // 24 hours
  res.cookie('_cid', _cid, {
    maxAge: 30 * 60 * 1000,
    httpOnly: true,
    secure: secure,
    path: '/',
    domain: domain
  }) //30분 갱신
  res.cookie('_sid', _sid, {
    httpOnly: true,
    secure: secure,
    path: '/',
    domain: domain
  }) // session cookie

  return res
}

app.prepare().then(() => {
  const server = express()
  server.use(cookieParser())
  // Service Worker
  server.get('/service-worker.js', (req, res) => {
    res.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    )
    res.set('Content-Type', 'application/javascript')

    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    const filePath = join(__dirname, '.next', pathname)

    return app.serveStatic(req, res, filePath)
  })

  // 프로필 페이지
  server.get('/' + profileRegEx, (req, res) => {
    res.header('X-Robots-Tag', 'noindex')

    const params = { identifier: req.url.split('/')[1] }
    return app.render(req, res, '/my_page', params)
  })

  // 뷰어 페이지
  server.get('/' + profileRegEx + '/:seoTitle', (req, res) => {
    const params = {
      identifier: req.url.split('/')[1],
      seoTitle: req.url.split('/')[2]
    }
    return app.render(
      req,
      makeTrackingCookieResponse(req, res),
      '/contents_view',
      params
    )
  })

  // 뷰어 페이지 + 페이지 넘버
  server.get('/' + profileRegEx + '/:seoTitle/:pageNum', (req, res) => {
    const params = {
      identifier: req.url.split('/')[1],
      seoTitle: req.url.split('/')[2]
    }
    return app.render(
      req,
      makeTrackingCookieResponse(req, res),
      '/contents_view',
      params
    )
  })

  // 트랙킹 페이지
  server.get('/t/:identifier/:seoTitle', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')

    let pathname = req.url.split('/')

    if (!pathname[2] || !pathname[3]) {
      return app.render(req, res, '/not_found_page', req.query)
    }

    const params = { identifier: pathname, seoTitle: pathname }
    return app.render(req, res, '/tracking', params)
  })

  // 트랙킹 디테일 페이지
  server.get('/td/:identifier/:seoTitle', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')

    let pathname = req.url.split('/')

    if (!pathname[2] || !pathname[3]) {
      return app.render(req, res, '/not_found_page', req.query)
    }

    const params = { identifier: pathname, seoTitle: pathname }
    return app.render(req, res, '/tracking_detail', params)
  })

  // 태그 문서 목록 페이지
  server.get('/tag/:tag', (req, res) => {
    if (!req.params.tag)
      return app.render(req, res, '/not_found_page', req.query)

    const params = { tag: req.params.tag }
    return app.render(req, res, '/contents_list', params)
  })

  // 최신 문서 목록 페이지
  server.get('/latest', (req, res) => {
    return app.render(req, res, '/contents_list', req.query)
  })

  // 추천 문서 목록 페이지
  server.get('/featured', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
    return app.render(req, res, '/contents_list', req.query)
  })

  // 인기 문서 목록 페이지
  server.get('/popular', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
    return app.render(req, res, '/contents_list', req.query)
  })

  // 찜 문서 목록 페이지
  server.get('/mylist', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
    return app.render(req, res, '/contents_list', req.query)
  })

  // 내가 본 문서 목록 페이지
  server.get('/history', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
    return app.render(req, '/contents_list', req.query)
  })

  // 회사소개 페이지
  server.get('/au', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
    return app.render(req, res, '/about_us', req.query)
  })

  // FAQ 페이지
  server.get('/faq', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
    return app.render(req, res, '/faq', req.query)
  })

  // 태그 목록 페이지
  server.get('/more', (req, res) => {
    return app.render(req, res, '/more', req.query)
  })

  // 개인정보정책 페이지
  server.get('/pp', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
    return app.render(req, res, '/privacy_policy', req.query)
  })

  // 이용약관 페이지
  server.get('/t', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
    return app.render(req, res, '/terms', req.query)
  })

  // 유저 가이드 페이지
  server.get('/ug', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
    return app.render(req, res, '/user_guide', req.query)
  })

  // 유저 가이드 페이지
  server.get('/callback', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
    return app.render(req, res, '/callback', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (env === 'development') {
      console.log(
        '\n\n\n' +
          ' ____   ___   _       ____  ____   ____ _____      _____ __ __   ____  ____     ___ \n'
            .blue +
          '|    \\ /   \\ | |     /    ||    \\ |    / ___/     / ___/|  |  | /    ||    \\   /  _]\n'
            .blue +
          '|  o  )     || |    |  o  ||  D  ) |  (   \\_     (   \\_ |  |  ||  o  ||  D  ) /  [_ \n'
            .blue +
          '|   _/|  O  || |___ |     ||    /  |  |\\__  |     \\__  ||  _  ||     ||    / |    _]\n'
            .blue +
          '|  |  |     ||     ||  _  ||    \\  |  |/  \\ |     /  \\ ||  |  ||  _  ||    \\ |   [_ \n'
            .blue +
          '|  |  |     ||     ||  |  ||  .  \\ |  |\\    |     \\    ||  |  ||  |  ||  .  \\|     |\n'
            .blue +
          '|__|   \\___/ |_____||__|__||__|\\_||____|\\___|      \\___||__|__||__|__||__|\\_||_____|\n'
            .blue
      )

      console.log('Project Version : '.bold.blue + version)
      console.log('NODE_ENV : '.bold.blue + env)
      console.log('NODE_ENV_SUB : '.bold.blue + envSub)
      console.log('\n\n')
    } else {
      console.log('POLARIS SHARE')
      console.log('Project Version : ' + version)
      console.log('NODE_ENV : ' + env)
      console.log('NODE_ENV_SUB : ' + envSub)
    }

    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
