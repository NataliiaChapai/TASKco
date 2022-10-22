const { createError } = require('../../helpers');

const { ColorSet } = require('../../models');

const changeColor = async (req, res) => {
  const { boardId } = req.params;
  const { column, color } = req.body;
  const changes = await ColorSet.findOneAndUpdate({boardId}, { [column]: color});
  if (!changes) {
    throw createError(400);
  }
  
  res.status(200).json({
    message: 'Color was changed'
  });
};

module.exports = changeColor;