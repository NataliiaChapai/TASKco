const { createError } = require('../../helpers');

const { Board } = require('../../models');

const updateBoard = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const board = await Board.findOne({ id });
  if (!board) {
    throw createError(400);
  }
  const newBoard = await board.updateOne({ name });

  res.status(200).json({
    code: 200,
    status: 'Success',
    newBoard
  });
};

module.exports = updateBoard;
