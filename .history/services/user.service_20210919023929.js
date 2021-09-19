const UserService = require('../models/schema/user.schema');

exports.getUsers = async () => {
   return await UserService.find({});
}

exports.getUserById = async () => {
   return await UserService.find({});
}