const db = require("../data/dbConfig.js");

const get = async () => {
  return await db("accounts");
};

module.exports = {
  get
};
