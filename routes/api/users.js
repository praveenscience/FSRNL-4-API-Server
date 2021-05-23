const fs = require("fs");
const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
  res.json("You're in Users!");
});
app.get("/new", (req, res) => {
  res.json("Please use the POST request!");
});
app.post("/new", (req, res) => {
  console.log(req.body);
  res.json("Welcome!");
});
app.post("/upload", (req, res) => {
  const uploadPath =
    __dirname +
    "/../../uploads/" +
    new Date().getTime() +
    "-" +
    req.body.Name +
    "-" +
    req.files.Picture.name;
  req.files.Picture.mv(uploadPath, err => {
    if (err) {
      res.status(500).json("Some bad thing happened! Blame Sadaf.");
    } else {
      res.json("All good, check your uploads folder.");
    }
  });
});

module.exports = app;
