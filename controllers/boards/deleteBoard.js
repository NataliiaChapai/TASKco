const { createError } = require('../../helpers');

const { Board } = require('../../models');

const deleteBoard = async (req, res) => {
  const { id } = req.params;
  const board = await Board.findById(id);
  if (!board) {
    throw createError(400);
  }
  await board.delete({ id });

  res.status(200).json({
    message: 'Board deleted successfully',
  });
};

module.exports = deleteBoard;
