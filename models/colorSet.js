const { Schema, model } = require("mongoose");

const colorSetSchema = Schema(
  {
    todo: {
      type: String,
      default: '#cdecea',
    },
    inprogress: {
        type: String,
        default: '#cdecea',
    },
    done: {
        type: String,
        default: '#cdecea',
    },
    archive: {
        type: String,
        default: '#cdecea',
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