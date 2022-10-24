const { Schema, model } = require("mongoose");

const taskSchema = Schema(
  {
    name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Todo', 'In progress', 'Done', 'Archive'],
      default: 'Todo'
    },
    boardId: {
        type: String
    },
    comments: [{
        comment: {
          type: String,
        },
        time: {
          type: Date,
        },
      }],
    
  },
  { versionKey: false, timestamps: { createdAt: true, updatedAt: false }}
);

const Task = model("task", taskSchema);

module.exports = {
  Task,
};
