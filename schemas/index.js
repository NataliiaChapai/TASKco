const { registerSchema, loginSchema, verificationSchema } = require('./auth');
const { addBoard } = require('./board');
const { addTask } = require('./task');
const { passwordSchema } = require('./user')

module.exports = {
    registerSchema,
    loginSchema,
    verificationSchema,
    addBoard,
    addTask,
    passwordSchema
}