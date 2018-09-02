"use strict";

const Router = require('koa-router')
const router = new Router();

router.get('/users', ctx => {
    ctx.body = 'Hello, Users!';
})

module.exports = router
