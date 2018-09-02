"use strict";

const compose = require('koa-compose')

function routeChainer(routers){
    var chain = [];

    routers.forEach((router) =>{
        chain.push(router.routes());
        chain.push(router.allowedMethods());
        console.log("Adding route: " + "'" +router.stack[0].path + "'" + " to route chain.")
    });
    return compose(chain)
}

module.exports = routeChainer;
