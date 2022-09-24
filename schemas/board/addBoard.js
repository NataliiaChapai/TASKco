const Joi = require('joi');

const addBoard = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
});

module.exports = addBoard;
