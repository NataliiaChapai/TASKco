const authRouter = require('./auth');
const usersRouter = require('./users');
const boardsRouter = require('./boards')
const tasksRouter = require('./tasks');

module.exports = {
    authRouter,
    usersRouter,
    boardsRouter,
    tasksRouter
}