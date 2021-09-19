const UserService = require('../models/index');

exports.getUserById = () => {
   UserService.find({})
}