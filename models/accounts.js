const db = require("../data/dbConfig.js");

const get = async () => {
  return await db("accounts");
};

const getById = async id => {
  return await db("accounts").where({ id });
};

const insert = async account => {
  return await db("accounts").insert(account);
};

const remove = async id => {
  return await db("accounts")
    .where({ id })
    .delete();
};

module.exports = {
  get,
  getById,
  insert,
  remove
};
