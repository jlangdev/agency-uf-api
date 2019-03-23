const fs   = require('fs');
const jwt  = require('jsonwebtoken');


/**
 * 
 * RSA keys generated @ http://www.csfieldguide.org.nz/en/interactives/rsa-key-generator/index.html
 * Should probably find a better way to store these in the directory
 * Perhaps utilize .env somehow?
 * Just need to make sure these can't be accesse via accessing auth directory in a browser
 * 
 */
const privateKEY  = fs.readFileSync('./private.key', 'utf8');
const publicKEY  = fs.readFileSync('./public.key', 'utf8');


// PAYLOAD
var payload = {
    data1: "Data 1",
    data2: "Data 2",
    data3: "Data 3",
    data4: "Data 4",
   };