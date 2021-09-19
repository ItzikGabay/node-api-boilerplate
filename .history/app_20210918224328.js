// Adding express
const express = require('express');
const app = express();

// Adding Dotenv
require('dotenv').config();

// Adding logging
// Adding Auth
// Adding Sockets
// Adding mongoose
// Adding routes

let server = app.listen(process.env.PORT_DEV, process.env.HOST_DEV, err => {
   if (err) throw err;
   const host = server.address().address;
   const port = server.address().port;
   console.error(`server listening on http://${host}/${port}`);
})