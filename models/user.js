const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    password: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: { createdAt: true, updatedAt: false } }
);

const User = model("user", userSchema);

module.exports = {
  User,
};
