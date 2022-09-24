const { Board } = require('../../models');

const getAll = async (req, res) => {
  const { _id } = req.user;
  const boards = await Board.find({userId: _id});

  res.json({
    boards
  });
};

module.exports = getAll;
