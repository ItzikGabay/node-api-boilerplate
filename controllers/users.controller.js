const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserService = require("../services/user.service");
const UserSchema = require("../models/schema/user.schema");
const UserValidation = require("../models/validations/user.validation");
const Responder = require("../utils/apiResponder");
const logger = require("../utils/logger");

// Get all users list
exports.getUsersList = async (req, res) => {
   let result = await UserService.getAllUsers();
   return Responder.successResponseWithData(res, "", result);
};

// User profile by ID
exports.findUserById = async (req, res) => {
   let result = await UserService.getUserById(id);
   return Responder.successResponseWithData(res, "Find User Profile", result);
};

// User Profile
exports.userProfile = async (req, res) => {
   // get user info data
   // req.user is from jwt token middleware.
   let result = await UserService.getUserById(req.user._id);
   // remove the password from the result
   result.password = undefined;
   return Responder.successResponseWithData(res, "Profile", result);
};

// Login
exports.loginUser = async (req, res) => {
   let result = "";

   /**
    * 1. Validate the input
    */
   const { error } = UserValidation.loginSchema.validate(req.body);
   if (error) {
      return Responder.errorResponseWithData(res, "Error, please try again later.", "0");
   }
   logger.info(`JOI: Username @${req.body.email} Joi /LOGIN passed successfully`);

   /**
    * 2. Check if email not exist.
    */
   const foundUser = await UserSchema.findOne({ email: req.body.email });
   if (!foundUser) return Responder.errorResponseWithData(res, "Error, email or password wrong.", "0");

   /**
    * 3. Check if password match.
    */
   const validPass = await bcrypt.compare(req.body.password, foundUser.password);
   if (!validPass) return Responder.errorResponseWithData(res, "Error, email or password wrong.", "0");

   /**
    * 3. Create jwt
    */
   const token = jwt.sign({ _id: foundUser._id }, process.env.TOKEN_SECRET);
// secret: 'itzikisgever'
   // 123456
   // itzikisgever_123456_45iefjhgbesd
   // 3rferfy4ut4th4uk5ht45hk4hgk4
   /**
    * 4. Success login.
    */
   logger.info(
      `MONGODB: Username @${req.body.email} Just logged in successfully.`
   );
   return res.header('auth-token', token).send({ status: '1', message: "Successfully Logged in! Please use the provide", auth_token: token, user_id: foundUser._id });
   // return Responder.successResponseWithData(res, `Successfully Logged in! Welcome.`, "");

};

// Register
exports.registerUser = async (req, res) => {
   let result = "";

   /**
    * 1. Validate the input
    */
   const { error } = UserValidation.registerSchema.validate(req.body);
   if (error) {
      return Responder.errorResponseWithData(res, error, "Error, please try again later.");
   }
   logger.info(`JOI: Username @${req.body.username} Joi /REGISTER passed successfully`);


   /**
    * 2. Check if email || username already exist.
    */
   // Email check:
   const emailExist = await UserSchema.findOne({ email: req.body.email });
   if (emailExist) return Responder.errorResponseWithData(res, "Error, Email already in use!", "0");

   // Username check:
   const usernameExist = await UserSchema.findOne({ email: req.body.username });
   if (usernameExist) return Responder.errorResponseWithData(res, "Error, Username already in use!", "0");

   /**
    * 3. Hashing the password with bcrypt
    */
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.password, salt);

   /**
    * 4. Create the user
    */
   const user = new UserSchema({
      nickname: req.body.nickname,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
   });

   /**
    * 5. Error handling stage.
    */
   try {
      result = await user.save();
      logger.info(
         `MONGODB: Username @${req.body.username} Added to 'Users' collection successfully.`
      );
      return Responder.successResponseWithData(res, "Successfully registered! (your id is attached)", { userID: user._id });
   } catch (e) {
      result = "Error, please try again later.";
      return Responder.errorResponseWithData(res, e, result);
   }
};
