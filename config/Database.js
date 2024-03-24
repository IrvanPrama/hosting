const { Sequelize } = require("sequelize");

const db = new Sequelize("crud_db", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
});

module.exports = db;
