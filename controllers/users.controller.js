const UserService = require('../services/user.service');

// Get users list
exports.getUsersList = async () => {
   let result = await UserService.getAllUsers();
   return result;
};

// Find user by id
exports.findUserById = async (id) => {
   let result = await UserService.getUserById(id);
   return result;
};

