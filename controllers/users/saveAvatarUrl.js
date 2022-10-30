const { User } = require('../../models');
const { createError } = require('../../helpers');
const { urlSchema } = require('../../schemas');

const saveAvatarUrl = async (req, res) => {
  const { error } = urlSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { _id } = req.user;
  const { avatarURL } = req.body;

  const result = await User.findByIdAndUpdate(_id, { avatarURL }, {new: true});
  if (!result) {
    throw createError(404);
  }
  res.status(200).json({
    status: 200,
    message: "Success",
    avatarURL: result.avatarURL,
  });
};

module.exports = saveAvatarUrl;
