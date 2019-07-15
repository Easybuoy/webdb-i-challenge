const express = require("express");

const Accounts = require("../models/accounts");

const Router = express.Router();

Router.get("/", async (req, res) => {
  const data = await Accounts.get();

  res.json({ status: "success", data });
});

module.exports = Router;
