// Adding express
const express = require('express');
const app = express();

// Adding Dotenv
require('dotenv').config()

// Adding logging
// Adding Auth
// Adding Sockets
// Adding mongoose
// Adding routes

app.listen(process.env.PORT, process.env.PORT, err => {
   if (err) throw err;
   console.error(`server listening on ${server.address().port}`);
})