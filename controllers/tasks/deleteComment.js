const { createError } = require('../../helpers');

const { Task } = require('../../models');

const deleteComment = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findById(taskId);
  if (!task) {
    throw createError(400);
  }
  await task.updateOne({
    $pop: { 
        comments: 1 
        }  
   });
  
  res.status(200).json({
    message: 'Success',
  });
};

module.exports = deleteComment;