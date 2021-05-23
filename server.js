// Include Express JS.
const express = require("express");
// Let's create a new Express Instance.
const app = express();
// Listen it in a particular port.
const port = 3000;

app.listen(port, () => {
  console.log(`Server Started in Port ${port}.`);
});
