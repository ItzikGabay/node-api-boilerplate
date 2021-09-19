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

app.listen(config.get('port'), config.get('host'), err => {
   if (err) throw err;
   console.error(`server listening on ${server.address().port}`);
})