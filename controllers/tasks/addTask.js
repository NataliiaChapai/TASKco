const { Task, Board } = require('../../models');

const addTask = async (req, res) => {
  const { name, status } = req.body;
  const { boardId } = req.params;
  const taskStatus = status.toLowerCase().split(' ').join('')
  const taskCount = `taskCount.${taskStatus}`;
  const task = await Task.create({ name, status, boardId });
  const board = await Board.findById(boardId);
  await board.updateOne({[taskCount]: board.taskCount[taskStatus] + 1});
  res.status(200).json({
    task
  });
};

module.exports = addTask;