const express = require("express");
const menuRouter = express.Router();
const {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
} = require("../src/controller/menu");

menuRouter.route("/").post(createItem).get(getAllItems);
menuRouter.route("/:id").get(getItem).patch(updateItem).delete(deleteItem);
