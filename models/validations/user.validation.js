const Joi = require('joi');

exports.registerSchema = Joi.object({
   username: Joi.string()
      .min(6)
      .required(),
   email: Joi.string()
      .min(6)
      .required(),
   password: Joi.string()
      .min(6)
      .required(),
   nickname: Joi.string()
      .min(6)
      .required()
});

exports.loginSchema = Joi.object({
   email: Joi.string()
      .min(6),
   password: Joi.string()
      .min(6)
      .required(),
});