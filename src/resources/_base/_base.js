"use strict";

const Router = require('koa-router')
const router = new Router();

router.get('/', ctx => {
    ctx.body = 'Hello, Agency!';
})

module.exports = router
