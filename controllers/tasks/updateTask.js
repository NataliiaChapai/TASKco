const { createError } = require('../../helpers');

const { Task } = require('../../models');

const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { name } = req.body;
  const task = await Task.findById(taskId);
  if (!task) {
    throw createError(400);
  }
  await task.updateOne({ name });
  
  res.status(200).json({
    message: 'Success',
  });
};

module.exports = updateTask;