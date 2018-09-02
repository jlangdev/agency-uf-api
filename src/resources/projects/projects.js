"use strict";

const Router = require('koa-router')
const router = new Router();

router.get('/projects', ctx => {
    ctx.body = 'Hello, Projects!';
})

module.exports = router
