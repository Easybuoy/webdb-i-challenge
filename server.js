const express = require("express");

const accountsRoutes = require("./routes/accounts");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  return res.json({ status: "success", message: "Welcome to Accounts API" });
});
server.use("/api/accounts", accountsRoutes);

module.exports = server;
