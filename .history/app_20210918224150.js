// Adding express
const express = require('express');
const app = express();

// Adding Dotenv
require('dotenv').config();
console.log(process.env.PORT);

// Adding logging
// Adding Auth
// Adding Sockets
// Adding mongoose
// Adding routes

let server = app.listen(process.env.PORT, process.env.HOST, err => {
   if (err) throw err;
   const host = server.address().address;
   var port = server.address().port;
   console.error(`server listening on ${host}/${port}`);
})