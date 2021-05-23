const fs = require("fs");
const express = require("express");
const app = express.Router();

const Users = [];
app.get("/", (req, res) => {
  res.json("You're in Users!");
});
app.post("/", (req, res) => {
  const { Name } = req.body;
  if (!Name) {
    res.status(400).json(`Where's Name?`);
  } else {
    if (Users.indexOf(Name) > -1) {
      res.status(409).json(`${Name} already exists.`);
    } else {
      Users.push(Name);
      res.status(201).json(`Added ${Name}.`);
    }
  }
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
