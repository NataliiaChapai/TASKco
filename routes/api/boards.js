const express = require("express");

const { boards } = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");

const { user, isValidId, validation } = require("../../middlewares");

const { addBoard } = require('../../schemas');

const router = express.Router();

router.get('/', user, ctrlWrapper(boards.getAll));

router.get('/:id', user, isValidId, ctrlWrapper(boards.getById));

router.post('/', user, validation(addBoard), ctrlWrapper(boards.addBoard));

router.put('/:id', user, isValidId, ctrlWrapper(boards.updateBoard));

router.delete('/:id', user, isValidId, ctrlWrapper(boards.deleteBoard));

module.exports = router;