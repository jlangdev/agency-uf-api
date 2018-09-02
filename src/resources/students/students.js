"use strict";

const Router = require('koa-router')
const Student = require('./schema.js')
const router = new Router();

router.get('/students', async (ctx) => {
    try {
        let response = await queryAll(Student)
        ctx.body = response;
        ctx.status = 200;

    } catch (err) {
        ctx.status = 500;
        ctx.message = "Error finding students"
    }
})

function queryAll(query) {
    return new Promise(resolve => {
        resolve(query.find({})
    )})
};

module.exports = router
