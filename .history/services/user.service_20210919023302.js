const UserService = require('../models/index');

function getUserById() {
   UserService.find({})
}