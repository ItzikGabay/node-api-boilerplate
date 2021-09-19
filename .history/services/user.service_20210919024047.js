const UserService = require('../models/schema/user.schema');

/**
 * Get all users from the database.
 * @return {<Promise>} array of users.
 */
exports.getUsers = async () => {
   return await UserService.find({});
}

exports.getUserById = async () => {
   return await UserService.findById({});
}