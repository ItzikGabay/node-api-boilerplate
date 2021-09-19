const UserService = require('../models/index');

exports.getUserById = async () => {
   return UserService.find({});
}