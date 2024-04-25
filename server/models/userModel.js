const mongoose = require("mongoose");

// representation of that object
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  age: Number,
});

// Variable for interacting with User in our code
const User = mongoose.model("User", userSchema);

module.exports = User;
