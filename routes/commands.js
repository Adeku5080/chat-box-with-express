const express = require("express");
const commandRouter = express.Router();
const { createCommand, getAllCommands } = require("../src/controller/command");

commandRouter.route("/").post(createCommand).get(getAllCommands);

module.exports = commandRouter;
