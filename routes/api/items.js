const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
  res.json("You're in Items!");
});

module.exports = app;
