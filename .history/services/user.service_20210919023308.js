const UserService = require('../models/index');

exports.function getUserById() {
   UserService.find({})
}