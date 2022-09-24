const { createError } = require('../../helpers');

const { Task } = require('../../models');

const getById = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    throw createError(404);
  }
  res.json({
    task
  });
};

module.exports = getById;
