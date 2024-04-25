const express = require("express");
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
// import express from "express";
const cors = require("cors");
const mongoose = require("mongoose");

const app = express(); // This is our backend app

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
); // to avoid issues
app.use(express.json()); // we specify the data format which will be json

// Connect DB
mongoose
  .connect(
    "mongodb+srv://tttalhatariq1:429fAKNRl8wtfWyf@cluster0.qiki9l0.mongodb.net/eccom"
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Error in DB Connection");
  });

// Requests Handling
app.get("/", (req, res) => {
  console.log(req.body);
  // process
  res.status(200).send("Main End Point of Server");
});

app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(3002, () => {
  console.log("server is running");
});
// mongodb: mongodb+srv://tttalhatariq1:429fAKNRl8wtfWyf@cluster0.qiki9l0.mongodb.net/
