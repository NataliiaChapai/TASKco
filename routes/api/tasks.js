const express = require("express");

const {tasks} = require("../../controllers");

const {ctrlWrapper} = require("../../helpers");

const { user, isValidId, validation } = require("../../middlewares");

const { addTask } = require('../../schemas');

const router = express.Router();

router.get('/tasks/:taskId', user, isValidId, ctrlWrapper(tasks.getById));

router.patch('/tasks/:taskId', user, isValidId, ctrlWrapper(tasks.updateStatus));

router.put('/tasks/:taskId', user, isValidId, ctrlWrapper(tasks.updateTask));

router.delete('/tasks/:taskId', user, isValidId, ctrlWrapper(tasks.deleteTask));

router.get('/comments/:taskId', user, ctrlWrapper(tasks.getComments));

router.post('/comments/:taskId', user, ctrlWrapper(tasks.addComment));

router.delete('/comments/:taskId', user, ctrlWrapper(tasks.deleteComment));

router.post('/:boardId', user, validation(addTask), ctrlWrapper(tasks.addTask));

router.get('/:boardId', user, ctrlWrapper(tasks.getAll));

router.get('/colors/:boardId', user, ctrlWrapper(tasks.getColors));

router.patch('/colors/:boardId', user, ctrlWrapper(tasks.changeColor));

module.exports = router;