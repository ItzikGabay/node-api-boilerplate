const mongoose = require("mongoose");

exports.establish_db_connection = (() => {
   mongoose.connect('mongodb://localhost:27017/tripletcodeapi', {
      // mongoose.connect('mongodb+srv://admin:admin2@main.gewhd.mongodb.net/tripletCode?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
   });
});

// for heroku



exports.connectionListening = (() => {
   const db = mongoose.connection;
   db.once('error', () => {
      logger.warn("Error trying to connect to mongoose!")
   })
   db.once('open', () => {
      logger("🚀 Mongoose connection established! 🚀")
   })
   // db.on('error', console.error.bind(console, 'connection error'))
})

