"use strict";
let path = require('path');
let config = require('dotenv').config({path: path.resolve(process.cwd(),'.env')})

const api = require('./api');
const port = process.envPort || 4001;

const server = api.listen(port, () => {
    console.log("\nagency-uf-api listening on port: " + port);
})