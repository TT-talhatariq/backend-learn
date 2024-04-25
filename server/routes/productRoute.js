const express = require("express");

const router = express.Router();

// CRUD Operations
router.get("/", (req, res) => {
  res.status(200).send("All Products");
});

router.post("/", (req, res) => {
  res.status(200).send(" Added a Product");
});

router.patch("/", (req, res) => {
  res.status(200).send("Edited a Product");
});

router.delete("/", (req, res) => {
  res.status(200).send("Deleted a Product");
});

// Extra Request
router.get("/video-games", (req, res) => {
  res.status(200).send("Video Game Products");
});

module.exports = router;
