"use strict";

const Router = require('koa-router')
const User = require('./schema.js')
const router = new Router();

router.get('/users', async (ctx) => {
    try {
        let response = await queryAll(User)
        ctx.body = response;
        ctx.status = 200;



    } catch (err) {
        ctx.status = 500;
        ctx.message = "Error finding users"
    }
})

function queryAll(query) {
    return new Promise(resolve => {
        resolve(query.find({})
    )})
};

module.exports = router
