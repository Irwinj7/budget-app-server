// DEPENDENCIES
const express = require("express");
const cors = require("cors")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to budget app");
});

const logsController = require("./controllers/inputController.js");
app.use("/input", logsController)

// 404 page
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

module.exports = app