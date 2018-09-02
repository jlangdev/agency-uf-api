"use strict";

const api = require('./api');
const port = process.envPort || 4001;

const server = api.listen(port, () => {
    console.log("\nagency-uf-api listening on port: " + port);
})