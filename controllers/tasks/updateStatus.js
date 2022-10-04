const { createError } = require('../../helpers');
const { Task, Board } = require('../../models');

const updateStatus = async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;
  const currentTask = await Task.findById(taskId);

  if (!currentTask) {
    throw createError(400);
  }
  const taskStatus = status.toLowerCase().split(' ').join('');
  const taskCount = `taskCount.${taskStatus}`;
  const { boardId } = currentTask;
  const board = await Board.findById(boardId);
  const oldTaskStatus = currentTask.status.toLowerCase().split(' ').join('');
  const oldTaskCount = `taskCount.${oldTaskStatus}`
  await board.updateOne({[taskCount]: board.taskCount[taskStatus] + 1, [oldTaskCount]: board.taskCount[oldTaskStatus] - 1});  
  await currentTask.updateOne({ status });

  res.status(200).json({
    message: 'Task status updated successfully',
  });
};

module.exports = updateStatus;
