// Include Express JS.
const express = require("express");
// Import Root Route Handler.
const root = require("./routes/root");
// Let's create a new Express Instance.
const app = express();
const port = 3000;

// Route Handlers.
app.use("/", root);

// Listen it in a particular port.
app.listen(port, () => {
  console.log(`Server Started in Port ${port}.`);
});
