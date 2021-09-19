const UserService = require('../models/schema/user.schema');

/**
 * Get all users from the database.
 * @return {<Promise>}        array of users. (use async/await)
 */
exports.getUsers = async () => {
   return await UserService.find({});
}


/**
 * Get user by his ID from the database.
 * @param {string} id         ID of the user
 * @return {<Promise>}        object of user. (use async/await)
 */
exports.getUserById = async () => {
   return await UserService.findById({});
}