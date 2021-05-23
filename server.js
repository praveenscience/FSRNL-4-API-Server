// Include Express JS.
const express = require("express");
// Let's create a new Express Instance.
const app = express();
const port = 3000;

// Create a GET Request Handler for /.
app.get("/", (req, res) => {
  res.json("Hello Everyone!");
});

// Listen it in a particular port.
app.listen(port, () => {
  console.log(`Server Started in Port ${port}.`);
});
