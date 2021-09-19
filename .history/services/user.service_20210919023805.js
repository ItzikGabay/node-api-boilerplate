const UserService = require('../models/schema/');

exports.getUserById = async () => {
   return await UserService.findAll({});
}