// Include Express JS.
const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
// Import Root Route Handler.
const root = require("./routes/root");
// Let's create a new Express Instance.
const app = express();
const port = 3000;

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(fileUpload());

// Route Handlers.
app.use("/", root);

// Listen it in a particular port.
app.listen(port, () => {
  console.log(`Server Started in Port ${port}.`);
});
