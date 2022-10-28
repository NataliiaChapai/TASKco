const Joi = require('joi');

const passwordSchema = Joi.object({
  password: Joi.string().regex(/^[a-zA-Z0-9]+$/).min(8).max(51).required().messages({
    "string.base": "Sorry! It looks like something went wrong. Please try later.",
    "string.pattern.base": "Password must contain 8 to 51 letters or numbers",
    "string.empty": "Password is not allowed to be empty",
    "string.min": "Email length must be at least 8 characters long",
    "string.max": "Password length must be less than or equal to 51 characters long",
    }),
});

module.exports = passwordSchema;