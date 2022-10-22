const { createError } = require('../../helpers');

const { ColorSet } = require('../../models');

const getColors = async (req, res) => {
  const { boardId } = req.params;
  const colors = await ColorSet.findOne({boardId});
  if (!colors) {
    throw createError(404);
  }
  res.json({
    colors
  });
};

module.exports = getColors;