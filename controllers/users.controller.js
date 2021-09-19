const UserService = require('../services/user.service');
const Responder = require('../utils/apiResponder');

// Get users list
exports.getUsersList = async (req, res) => {
   let result = await UserService.getAllUsers();
   Responder.successResponseWithData(res,'', result);
};

// Find user by id
exports.findUserById = async (req, res) => {
   let result = await UserService.getUserById(id);
   Responder.successResponseWithData(res, '', result);
};

