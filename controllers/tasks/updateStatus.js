const { createError } = require('../../helpers');
const { Task } = require('../../models');

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const statusArray = ['Todo', 'In progress', 'Done', 'Archive'];
  const currentTask = await Task.findById(id);

  if (!currentTask) {
    throw createError(400);
  }

  const { status } = currentTask;
  const index = statusArray.indexOf(status);
  
  if (index === 3 || index === -1) {
    throw createError(400);
    }
    
  await currentTask.updateOne({ status: statusArray[index + 1] });
  res.status(200).json({
    message: 'Task status updated successfully',
  });
};

module.exports = updateStatus;
