const Joi = require('joi');

const urlSchema = Joi.object({
  avatarURL: Joi.string().required()
});

module.exports = urlSchema;