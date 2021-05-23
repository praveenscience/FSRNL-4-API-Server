const express = require("express");
const users = require("./api/users");
const items = require("./api/items");
const app = express.Router();

app.get("/", (req, res) => {
  res.json("You're in API!");
});
app.use("/users", users);
app.use("/items", items);

module.exports = app;
