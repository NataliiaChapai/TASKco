const { createError } = require('../../helpers');

const { Task } = require('../../models');

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findById(taskId);
  if (!task) {
    throw createError(400);
  }
  await task.delete({ taskId });

  res.status(200).json({
    message: 'Task deleted successfully',
  });
};

module.exports = deleteTask;