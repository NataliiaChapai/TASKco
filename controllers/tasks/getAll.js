const { Task } = require('../../models');

const getAll = async (req, res) => {
  const { boardId } = req.params;
  const { page = 1, limit = 10, status } = req.query;
  const offset = (page - 1) * limit;
  let query = { boardId };
  if (status) {
    query = { ...query, status };
  }
  const tasks = await Task.find(query, '', { skip: Number(offset), limit: Number(limit) });

  res.json({
    tasks,
  });
};

module.exports = getAll;