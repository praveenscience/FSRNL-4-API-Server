const express = require("express");
const api = require("./api");
const app = express.Router();

app.get("/", (req, res) => {
  res.json("Hello Everyone from Root!");
});
app.use("/api", api);

module.exports = app;
