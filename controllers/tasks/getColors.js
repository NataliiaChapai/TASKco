const { createError } = require('../../helpers');

const { ColorSet } = require('../../models');

const getColors = async (req, res) => {
  const { boardId } = req.params;
  const colors = await ColorSet.findOne({boardId});
  if (!colors) {
    throw createError(404);
  }
  res.json({
    todo: colors.todo,
    inprogress: colors.inprogress,
    done: colors.done,
    archive: colors.archive
  });
};

module.exports = getColors;