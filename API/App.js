const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const signUpRoutes = require("./routes/signUp");

const app = express();
dotenv.config();

const port = 8000;

app.use(cors());

// app.use(signUpRoutes);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
