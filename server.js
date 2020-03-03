require('dotenv').config();

const express = require('express');
const next = require('next');

const env = (process.env.NODE_ENV && process.env.NODE_ENV.trim().toLowerCase() === 'production') ? 'production' : 'development';
const port = 80;
const dev = env !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const profileRegEx = '(@(\\w)+|@(\\w)+[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3})';

app.prepare().then(() => {
    const server = express();

    // Service Worker
    server.get("/service-worker.js", (req, res) => {
        res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        res.set("Content-Type", "application/javascript");

        return app.serveStatic(req, res, "./.next/service-worker.js");
    });

    // 프로필 페이지
    server.get('/' + profileRegEx, (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);

        const params = {identifier: req.url.split('/')[1]};
        return app.render(req, res, '/my_page', params)
    });

    // 뷰어 페이지
    server.get('/' + profileRegEx + '/:seoTitle', (req, res) => {
        const params = {identifier: req.url.split('/')[1], seoTitle: req.url.split('/')[2]};
        return app.render(req, res, '/contents_view', params)
    });

    // 뷰어 페이지 + 페이지 넘버
    server.get('/' + profileRegEx + '/:seoTitle/:pageNum', (req, res) => {
        const params = {identifier: req.url.split('/')[1], seoTitle: req.url.split('/')[2]};
        return app.render(req, res, '/contents_view', params)
    });

    // 트랙킹 페이지
    server.get('/t/:identifier/:seoTitle', (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);

        let pathname = req.url.split('/');

        if (!pathname[2] || !pathname[3]) {
            return app.render(req, res, '/not_found_page', req.query);
        }

        const params = {identifier: pathname, seoTitle: pathname};
        return app.render(req, res, '/tracking', params)
    });

    // 트랙킹 디테일 페이지
    server.get('/td/:identifier/:seoTitle', (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);

        let pathname = req.url.split('/');

        if (!pathname[2] || !pathname[3]) {
            return app.render(req, res, '/not_found_page', req.query);
        }

        const params = {identifier: pathname, seoTitle: pathname};
        return app.render(req, res, '/tracking_detail', params)
    });

    // 태그 문서 목록 페이지
    server.get('/tag/:tag', (req, res) => {
        if (!req.params.tag) return app.render(req, res, '/not_found_page', req.query);

        const params = {tag: req.params.tag};
        return app.render(req, res, '/contents_list', params)
    });

    // 최신 문서 목록 페이지
    server.get('/latest', (req, res) => {
        return app.render(req, res, '/contents_list', req.query)
    });

    // 추천 문서 목록 페이지
    server.get('/featured', (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);
        return app.render(req, res, '/contents_list', req.query)
    });

    // 인기 문서 목록 페이지
    server.get('/popular', (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);
        return app.render(req, res, '/contents_list', req.query)
    });

    // 찜 문서 목록 페이지
    server.get('/mylist', (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);
        return app.render(req, res, '/contents_list', req.query)
    });

    // 내가 본 문서 목록 페이지
    server.get('/history', (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);
        return app.render(req, res, '/contents_list', req.query)
    });

    // 회사소개 페이지
    server.get('/au', (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);
        return app.render(req, res, '/about_us', req.query)
    });

    // FAQ 페이지
    server.get('/faq', (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);
        return app.render(req, res, '/faq', req.query)
    });

    // 태그 목록 페이지
    server.get('/m', (req, res) => {
        return app.render(req, res, '/more', req.query)
    });

    // 개인정보정책 페이지
    server.get('/pp', (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);
        return app.render(req, res, '/privacy_policy', req.query)
    });

    // 이용약관 페이지
    server.get('/t', (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);
        return app.render(req, res, '/terms', req.query)
    });

    // 유저 가이드 페이지
    server.get('/u', (req, res) => {
        res.header("X-Robots-Tag", "noindex");
        res.status(404);
        return app.render(req, res, '/user_guide', req.query)
    });

    server.all('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(port, err => {
        console.log('\n\n\n' +
        ' ____   ___   _       ____  ____   ____ _____      _____ __ __   ____  ____     ___ \n'.blue +
        '|    \\ /   \\ | |     /    ||    \\ |    / ___/     / ___/|  |  | /    ||    \\   /  _]\n'.blue +
        '|  o  )     || |    |  o  ||  D  ) |  (   \\_     (   \\_ |  |  ||  o  ||  D  ) /  [_ \n'.blue +
        '|   _/|  O  || |___ |     ||    /  |  |\\__  |     \\__  ||  _  ||     ||    / |    _]\n'.blue +
        '|  |  |     ||     ||  _  ||    \\  |  |/  \\ |     /  \\ ||  |  ||  _  ||    \\ |   [_ \n'.blue +
        '|  |  |     ||     ||  |  ||  .  \\ |  |\\    |     \\    ||  |  ||  |  ||  .  \\|     |\n'.blue +
        '|__|   \\___/ |_____||__|__||__|\\_||____|\\___|      \\___||__|__||__|__||__|\\_||_____|\n'.blue);

        console.log('NODE_ENV : '.bold + process.env.NODE_ENV);
        console.log('NODE_ENV_SUB : '.bold + process.env.NODE_ENV_SUB);
        console.log('\n\n');

        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`)
    })
});