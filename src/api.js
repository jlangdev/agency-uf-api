"use strict";
const db = require('./db/db.js')
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const body = require('koa-body');

//import router
const router = require('./routes/index.js')

//use middlewares
const app = new Koa()
app
    .use(cors())
    .use(body())
    .use(router)

module.exports = app;