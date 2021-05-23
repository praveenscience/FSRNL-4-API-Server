// Include Express JS.
const express = require("express");
// Let's create a new Express Instance.
const app = express();
const port = 3000;

// Create a GET Request Handler for /.
app.get("/", (req, res) => {
  res.json("Hello Everyone!");
});
app.get("/:sadaf", (req, res) => {
  res.json("Hey, you requested Sadaf for buying " + req.params.sadaf + "!");
});
app.get("/:sadaf/:devi", (req, res) => {
  if (req.query.form) {
    res.json({
      Sadaf: req.params.sadaf,
      Devi: req.params.devi,
      Query: req.query
    });
  } else if (req.query.arghya) {
    res.json(
      "Hey, you requested Sadaf for buying " +
        req.params.sadaf +
        " and Devi pays " +
        req.params.devi +
        " ₹! This is sponsored by Arghya!"
    );
  } else {
    res.json(
      "Hey, you requested Sadaf for buying " +
        req.params.sadaf +
        " and Devi pays " +
        req.params.devi +
        " ₹!"
    );
  }
});

// Listen it in a particular port.
app.listen(port, () => {
  console.log(`Server Started in Port ${port}.`);
});
