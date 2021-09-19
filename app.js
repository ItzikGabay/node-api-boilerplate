// Imports
// ------
const express           = require('express');
const app = express();
const morgan = require('morgan');

require('dotenv').config();



// Local Imports
// ----------
const router = require('./routes/index');
const logger = require('./utils/logger/index');

// Database Configuration
// -------
const mongooseConnect = require('./models/index');
mongooseConnect.establish_db_connection();
mongooseConnect.connectionListening();

// Express Middleware's
// --------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
app.use(morgan("common"));

// Adding Auth
// Adding Sockets
// Add Joi Validation

/**
 * Server listening for Prod/Dev.
 */
let server = app.listen(process.env.PORT_DEV, process.env.HOST_DEV, err => {
   if (err) throw err;
   const host = server.address().address;
   const port = server.address().port;
   logger.info(`Server Up Successfully. @see: http://${host}:${port}`);
});