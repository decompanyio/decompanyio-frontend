require('dotenv').config()

/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const next = require('next')
const { join } = require('path')
const { parse } = require('url')
const morgan = require('morgan')
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
const morganFunction = morgan('combined', {
  skip: function(req, res) {
    return res.statusCode < 400 || res.statusCode === 404
  }
})

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
  server.use(morganFunction)
  server.use(cookieParser())
  server.use(express.static('.next'))

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

  // 뷰어 페이지 + 페이지 넘버
  server.get(/\/@[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]/, (req, res) => {
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

  // 뷰어 페이지
  server.get(/\/@[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+/, (req, res) => {
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

  // 프로필 페이지
  server.get(/\/@[a-zA-Z0-9-]+\/?/, (req, res) => {
    res.header('X-Robots-Tag', 'noindex')

    const params = { identifier: req.url.split('/')[1] }
    return app.render(req, res, '/profile_page', params)
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
    res.header('X-Robots-Tag', 'noindex')

    if (!req.params.tag)
      return app.render(req, res, '/not_found_page', req.query)

    const params = { tag: req.params.tag }
    return app.render(req, res, '/contents_list', params)
  })

  // 최신 문서 목록 페이지
  server.get('/latest', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
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
  server.get('/others', (req, res) => {
    res.header('X-Robots-Tag', 'noindex')
    return app.render(req, res, '/others', req.query)
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

  server.get('/healthcheck', async (_req, res) => {
    // optional: add further things to check (e.g. connecting to dababase)
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now()
    }
    try {
      res.send(healthcheck)
    } catch (e) {
      healthcheck.message = e
      res.status(503).send(healthcheck)
    }
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    console.log('\n\n[Polaris Share]\n')

    console.log('Project Version : ' + version)
    console.log('NODE_ENV : ' + env)
    console.log('NODE_ENV_SUB : ' + envSub)
    console.log('\n\n')

    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
