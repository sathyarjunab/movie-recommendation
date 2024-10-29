const express = require("express");

const signUpController = require("../controller/signUpController");
const { console } = require("inspector");

const route = express.Router();

route.post("/signUp", (req, res) => {
  console.log("hiy");
});

module.exports = route;
