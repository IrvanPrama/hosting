const { Sequelize } = require("sequelize");

//masukan semua identitas database ke wadah yang bernama db
const db = new Sequelize(
  " bima1537_db_test",
  "bima1537_admintest",
  ",B3%$ggy{fj6",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = db;
