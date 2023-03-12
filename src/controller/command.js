const {
  models: { Command },
} = require("../models");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createCommand = async (req, res) => {
  try {
    console.log(req.body, "ali");
    const { command_code, command_value } = req.body;

    if (!command_code || !command_value) {
      return res.status(404).json({ msg: "you cannot perform this action" });
    }

    const command = await Command.create({ command_code, command_value });

    res.status(200).json({ command });
  } catch (err) {
    console.log(err);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllCommands = async (req, res) => {
  try {
    console.log(req.body, "ali");

    const commands = await Command.findAll();
    res.status(200).json({ commands });
  } catch (err) {
    console.log(err);
  }
};

const getACommand = async (req, res) => {
  try {
    const { id } = req.params;
    const command = await Command.findOne({ where: { id: id } });
    if (!command) {
      return res.status(404).json({ msg: "this command does not exist" });
    }
    res.status(200).json({ command });
  } catch (err) {
    console.log(err);
  }
};

const updateCommand = async (req, res) => {};

const deleteCommand = async (req, res) => {};
module.exports = {
  createCommand,
  getAllCommands,
};
