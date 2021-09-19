const mongoose = require("mongoose");
const logger = require('../utils/logger/index');

// Production & Development Configuration
const [dev_connection, prod_connection] =
   ['mongodb://localhost:27017/triplet',
   `mongodb+srv://${process.env.DB_USERNAME_PROD}:${process.env.DB_PASSWORD_PROD}@${process.env.DB_URL_PROD}?retryWrites=true&w=majority`];

// by default: production
let host_connection_url = prod_connection;
if (process.env.NODE_ENV !== 'production') {
   host_connection_url = dev_connection;
}

/**
 * Creating connection with mongoose to mongodb
 */
exports.establish_db_connection = (() => {
   mongoose.connect(dev_connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   });
});

/**
 * Connection listening for changes (events).
 */
exports.connectionListening = (() => {
   const db = mongoose.connection;

   db.on('error', () => {
      logger.warn("Error trying to connect to mongoose!");
   });

   db.once('open', () => {
      logger.info(`🚀 Mongoose connection established! 🚀 - ${host_connection_url}`);
   });
   // db.on('error', console.error.bind(console, 'connection error'))
})

