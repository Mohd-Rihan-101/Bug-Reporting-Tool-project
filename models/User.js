const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "developer"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
