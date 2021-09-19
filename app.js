// Imports
// ------
const express = require('express');
const app = express();
const router = require('./routes/index')
const logger = require('./utils/logger/index');

// Database
// -------
const mongooseConnect = require('./models/index');
mongooseConnect.establish_db_connection();
mongooseConnect.connectionListening();

// Middleware's
// --------
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

// Adding Auth
// Adding Sockets


/**
 * Server listening Prod/Dev
 */
let server = app.listen(process.env.PORT_DEV, process.env.HOST_DEV, err => {
   if (err) throw err;
   const host = server.address().address;
   const port = server.address().port;
   logger.info(`server listening on http://${host}:${port}`);
});