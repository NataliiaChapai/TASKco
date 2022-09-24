const { Schema, model } = require("mongoose");

const boardSchema = Schema(
  {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }
  },
  { versionKey: false, timestamps: { createdAt: true, updatedAt: false }}
);

const Board = model("board", boardSchema);

module.exports = {
  Board,
};
