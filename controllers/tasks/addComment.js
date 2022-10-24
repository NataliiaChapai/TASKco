const { createError } = require('../../helpers');

const { Task } = require('../../models');

const addComment = async (req, res) => {
  const { taskId } = req.params;
  const { comment } = req.body;
  const task = await Task.findById(taskId);
  if (!task) {
    throw createError(400);
  }
  await task.updateOne({ 
    $push: {
        comments: {
          comment: comment,
          time: new Date().toISOString(),
        },
      },
  
   });
  
  res.status(200).json({
    message: 'Success',
  });
};

module.exports = addComment;