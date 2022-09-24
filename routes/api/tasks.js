const express = require("express");

const {tasks} = require("../../controllers");

const {ctrlWrapper} = require("../../helpers");

const { user, isValidId, validation } = require("../../middlewares");

const { addTask } = require('../../schemas');

const router = express.Router();

router.get('/', user, ctrlWrapper(tasks.getAll));

router.get('/:id', user, isValidId, ctrlWrapper(tasks.getById));

router.post('/', user, validation(addTask), ctrlWrapper(tasks.addTask));

router.patch('/:id', user, isValidId, ctrlWrapper(tasks.updateStatus));

router.put('/:id', user, isValidId, ctrlWrapper(tasks.updateTask));

router.delete('/:id', user, isValidId, ctrlWrapper(tasks.deleteTask));

router.get('/comments/:taskId', user, ctrlWrapper(tasks.getComments));

router.post('/comments/:taskId', user, ctrlWrapper(tasks.addComment));

router.delete('/comments/:taskId', user, ctrlWrapper(tasks.deleteComment));

module.exports = router;