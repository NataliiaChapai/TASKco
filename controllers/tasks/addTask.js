const { Task } = require('../../models');

const addTask = async (req, res) => {
  const { name, boardId } = req.body;
  await Task.create({ name, boardId });
  res.status(200).json({
    message: 'Task created successfully',
  });
};

module.exports = addTask;