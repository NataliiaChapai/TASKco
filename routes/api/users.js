const express = require("express");

const {users} = require("../../controllers");

const {ctrlWrapper} = require("../../helpers");

const { user, upload } = require("../../middlewares");

const router = express.Router();

router.get('/current', user, ctrlWrapper(users.getCurrent));

router.patch('/avatars', user, upload.single('avatar'), ctrlWrapper(users.uploadAvatar));

router.patch('/password', user, ctrlWrapper(users.updatePassword));

router.patch('/google-avatar', user, ctrlWrapper(users.saveAvatarUrl));

module.exports = router;