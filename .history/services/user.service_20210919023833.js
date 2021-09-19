const UserService = require('../models/schema/user.schema');

exports.getUserById = async () => {
   return await UserService.find({});
}