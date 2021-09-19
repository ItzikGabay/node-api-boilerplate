const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const userSchema = new Schema({
   name: ''
});

module.exports = mongoose.model('User', snippetsSchema);