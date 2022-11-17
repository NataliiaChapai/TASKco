const { createError } = require('../../helpers');

const { ColorSet } = require('../../models');

const changeColor = async (req, res) => {
  const { boardId } = req.params;
  const { column, color } = req.body;
  const columnColor = await ColorSet.find({boardId});
  if (!columnColor) {
    throw createError(400);
  }
  await columnColor.updateOne({ [column]: color });
  res.status(200).json({
    message: 'Color was changed'
  });
};

module.exports = changeColor;