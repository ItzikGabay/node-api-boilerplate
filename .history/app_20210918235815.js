// Imports
const express = require('express');
const app = express();

// PVT Imports
const logger = require('./utils/logger/index');

// env file & logger & 
require('dotenv').config();


// Adding Auth
// Adding Sockets
// Adding mongoose
// Adding routes


/**
 * Server listening Prod/Dev
 */
let server = app.listen(process.env.PORT_DEV, process.env.HOST_DEV, err => {
   if (err) throw err;
   const host = server.address().address;
   const port = server.address().port;
   console.error(`server listening on http://${host}/${port}`);
})