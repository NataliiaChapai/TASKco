const { Task } = require('../../models');

const getComments = async (req, res) => {
    const { taskId } = req.params;
    const { comments } = await Task.findById(taskId);

    res.json({
        comments,
    });
};

module.exports = getComments;