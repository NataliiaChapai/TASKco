const { createError } = require('../../helpers');

const { Board } = require('../../models');

const getById = async (req, res) => {
  const { id } = req.params;
  const board = await Board.findById(id);
  if (!board) {
    throw createError(404);
  }
  res.json({
    board,
  });
};

module.exports = getById;

