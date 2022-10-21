const { createError } = require('../../helpers');

const { Task, Board } = require('../../models');

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  
  const task = await Task.findByIdAndRemove(taskId);
  if (!task) {
    throw createError(400);
  }
  const { boardId } = task;
  const board = await Board.findById(boardId);
  const taskStatus = task.status.toLowerCase().split(' ').join('');
  const taskCount = `taskCount.${taskStatus}`;
  await board.updateOne({[taskCount]: board.taskCount[taskStatus] - 1});

  res.status(200).json({
    message: 'Task deleted successfully',
  });
};

module.exports = deleteTask;