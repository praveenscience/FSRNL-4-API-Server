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
  console.log("+---------------------------+");
  console.log("| Contents of File Uploaded |");
  console.log("+---------------------------+");
  console.log(req.files.Picture.data.toString());
  res.json("Welcome!");
});

module.exports = app;
