const bcrypt = require('bcrypt');
const { User } = require('../../models');
const { createError } = require('../../helpers');
const { passwordSchema } = require('../../schemas');

const updatePassword = async (req, res) => {
  const { error } = passwordSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { _id } = req.user;
  const { password } = req.body;

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const result = await User.findByIdAndUpdate(_id, { password: hashPassword });
  if (!result) {
    throw createError(404);
  }
  res.status(200).json({
    message: 'Password was updated successfuly',
  });
};

module.exports = updatePassword;

