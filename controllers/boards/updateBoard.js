const { createError } = require('../../helpers');

const { Board } = require('../../models');

const updateBoard = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const board = await Board.findByIdAndUpdate(id, { name }, {new: true});
  if (!board) {
    throw createError(400);
  }

  res.status(200).json({
    board
  });
};

module.exports = updateBoard;
