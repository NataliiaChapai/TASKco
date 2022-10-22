const addTask = require('./addTask');
const deleteTask = require('./deleteTask');
const getAll = require('./getAll');
const getById = require('./getById');
const updateTask = require('./updateTask');
const updateStatus = require('./updateStatus');
const addComment = require('./addComment');
const deleteComment = require('./deleteComment');
const getComments = require('./getComments');
const changeColor = require('./changeColor');
const getColors = require('./getColors')

module.exports = {
    addTask,
    deleteTask,
    getAll,
    getById,
    updateTask,
    updateStatus,
    addComment,
    deleteComment,
    getComments,
    changeColor,
    getColors
}