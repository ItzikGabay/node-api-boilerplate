const UserSchema = require('../models/schema/user.schema');
const logger = require('../utils/logger');

/**
 * Get all users from the database.
 * @return {<Promise>}        Promise array of users. (use async/await)
 */
exports.getAllUsers = async () => {
   try {
      let data = await UserSchema.find();
      return data;
   } catch (e) {
      logger.warn('Could not find MongoDB Users.');
   }
};

/**
 * Get user by his ID from the database.
 * @param {string} id         ID of the user
 * @return {<Promise>}       Promise object of user. (use async/await)
 */
exports.getUserById = async (id) => {
   try {
      let data = await UserSchema.findById(id);
      return data;
   } catch (e) {
      logger.warn('Could not find MongoDB User.');
   }
};