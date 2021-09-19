const UserService = require('../models/index');

exports.getUserById = async () => {
   return await UserService.findAll({});
}