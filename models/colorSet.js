const { Schema, model } = require("mongoose");

const colorSetSchema = Schema(
  {
    todo: {
      type: String,
      default: 'azure',
    },
    inprogress: {
        type: String,
        default: 'azure',
    },
    done: {
        type: String,
        default: 'azure',
    },
    archive: {
        type: String,
        default: 'azure',
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