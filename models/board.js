const { Schema, model } = require("mongoose");

const boardSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    taskCount: {
      todo: { 
        type: Number,
        default: 0,
        require: true 
      },
      inprogress: { 
        type: Number,
        default: 0,
        require: true 
      },
      done: { 
        type: Number,
        default: 0,
        require: true 
      },
      archive: { 
        type: Number,
        default: 0,
        require: true 
      },
    },
  },
  { versionKey: false, timestamps: { createdAt: true, updatedAt: false } }
);

const Board = model("board", boardSchema);

module.exports = {
  Board,
};
