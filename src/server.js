"use strict";
const path = require('path'),
    config = require('dotenv').config({path: path.resolve(process.cwd(),'.env')}),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    students = require('./resources/students/students.js'),
    port = process.envPort || 4001,
    AGENCY_DB_URL = process.env.AGENCY_DB_URL;

//initialize and connect to mongoDB
mongoose.connect(AGENCY_DB_URL, { useNewUrlParser: true });

//initialize app
const app = express();


//attach middleware
app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/students',students);





app.listen(port, () => {
    console.log("\nagency-uf-api listening on port: " + port);
})