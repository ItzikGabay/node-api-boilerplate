const UserService = require('../models/schema/user.schema');

/**
 * Get all users from the database.
 * @return {<Promise>} array of users. (async)
 */
exports.getUsers = async () => {
   return await UserService.find({});
}


/**
 * Get user by his ID from the database.
 * @return {<Promise>} object of user.
 */
exports.getUserById = async () => {
   return await UserService.findById({});
}