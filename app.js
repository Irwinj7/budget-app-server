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
  res.send("Welcome to Captain's Log");
});

const logsController = require("./controllers/logsController.js");
app.use("/logs", logsController)

// 404 page
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

module.exports = app