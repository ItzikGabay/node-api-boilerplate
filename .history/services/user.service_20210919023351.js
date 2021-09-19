const UserService = require('../models/index');

exports.getUserById = () => {
   return UserService.find({});
}