const { Schema, model } = require("mongoose");

const colorSetSchema = Schema(
  {
    todo: {
      type: String,
      default: '#20b2ab33',
    },
    inprogress: {
        type: String,
        default: '#20b2ab33',
    },
    done: {
        type: String,
        default: '#20b2ab33',
    },
    archive: {
        type: String,
        default: '#20b2ab33',
    },
    boardId: {
        type: String,
        require: true
    },
  },
  { versionKey: false, timestamps: { createdAt: false, updatedAt: false } }
);

const ColorSet = model("colorSet", colorSetSchema);

module.exports = {
    ColorSet,
};