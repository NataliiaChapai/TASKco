const {isValidObjectId} = require("mongoose");

const {createError} = require("../helpers");

const isValidId = (req, res, next)=> {
    const {id} = req.params;
    const {boardId} = req.params;
    const {taskId} = req.params;
    let result;
    if (id) {
        result = isValidObjectId(id);
    }
    if (boardId) {
        result = isValidObjectId(boardId);
    }
    if (taskId) {
        result = isValidObjectId(taskId);
    }
    if(!result) {
        const error = createError(400, "Invalid id");
        throw new Error(error.message);
    }
    next();
}

module.exports = isValidId;