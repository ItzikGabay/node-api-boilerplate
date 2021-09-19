const mongoose = require("mongoose");
const logger = require('../utils/logger/index');

/**
 * Creating connection with mongoose to mongodb
 */
exports.establish_db_connection = (() => {
   mongoose.connect('mongodb://localhost:27017/triplet', {
      // mongoose.connect('mongodb+srv://admin:admin2@main.gewhd.mongodb.net/tripletCode?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
   });
});

/**
 * 
 */
exports.connectionListening = (() => {
   const db = mongoose.connection;

   db.on('error', () => {
      logger.warn("Error trying to connect to mongoose!")
   });

   db.once('open', () => {
      logger.info("🚀 Mongoose connection established! 🚀")
   });
   // db.on('error', console.error.bind(console, 'connection error'))
})

