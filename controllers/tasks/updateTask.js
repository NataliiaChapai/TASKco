const { createError } = require('../../helpers');

const { Task } = require('../../models');

const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { name } = req.body;
  const task = await Task.findByIdAndUpdate(taskId, { name }, {new: true});
  if (!task) {
    throw createError(400);
  }
  
  res.status(200).json({
    task
  });
};

module.exports = updateTask;