const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

// CRUD Operations
router.post("/login", async (req, res) => {
  try {
    const userData = req.body;
    console.log(userData);

    const user = await User.findOne({ email: userData.email });

    if (!user) {
      res.status(404).send({
        message: "No User Found!!",
      });
    } else {
      res.status(200).send({
        message: "Login Successfull!",
        user,
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Error / Login Failed",
      err: err,
    });
  }
});

router.post("/signup", async (req, res) => {
  console.log("in singup function");
  try {
    const userData = req.body;

    // password encryption

    const newUser = await User.create(userData);

    res.status(200).send(newUser);
  } catch (err) {
    console.log(err);
    res.status(404).send({
      message: "Error",
      err: err,
    });
  }
});

module.exports = router;
