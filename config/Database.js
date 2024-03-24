import { Sequelize } from ("sequelize");

const db = new Sequelize("scho9855_crud_db", "scho9855_admin", "&uMxT3(lM-dI", {
  host: "127.0.0.1",
  dialect: "mysql",
});

module.exports = db;
