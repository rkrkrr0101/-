const Sequelize = require("sequelize");
const Data = require("./data");

const env = process.env.NODE_ENV || "development";
require("dotenv").config();

const config = require("../config/config")[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize;

db.Data = Data;

Data.init(sequelize);

Data.associate(db);

module.exports = db;
