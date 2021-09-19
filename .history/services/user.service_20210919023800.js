const UserService = require('../models/sc');

exports.getUserById = async () => {
   return await UserService.findAll({});
}