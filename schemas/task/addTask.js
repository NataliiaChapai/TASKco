const Joi = require('joi');

const addTask = Joi.object({
  name: Joi.string().required(),
  status: Joi.string().valid('Todo', 'In progress', 'Done', 'Archive'),
  boardId: Joi.string()
});

module.exports = addTask;
