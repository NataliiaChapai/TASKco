const { createError } = require('../../helpers');

const { Board } = require('../../models');

const updateBoard = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const board = await Board.findOne({ id });
  if (!board) {
    throw createError(400);
  }
  await board.updateOne({ name });

  res.status(200).json({
    message: 'Success',
  });
};

module.exports = updateBoard;
