const { createError } = require('../../helpers');

const { Task } = require('../../models');

const getById = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findById(taskId);
  if (!task) {
    throw createError(404);
  }
  res.json({
    task
  });
};

module.exports = getById;
