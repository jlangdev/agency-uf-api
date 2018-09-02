const AGENCY_DB_URL = process.env.AGENCY_DB_URL;

const mongoose = require('mongoose')
mongoose.connect(AGENCY_DB_URL)
