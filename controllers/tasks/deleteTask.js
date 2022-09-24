const { createError } = require('../../helpers');

const { Task } = require('../../models');

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ id });
  if (!task) {
    throw createError(400);
  }
  await task.deleteOne({ id });

  res.status(200).json({
    message: 'Task deleted successfully',
  });
};

module.exports = deleteTask;