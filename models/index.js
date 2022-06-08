const Sequelize = require("sequelize");
const Log = require("./log");
const Data = require("./data");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize;
db.Log = Log;
db.Data = Data;

Log.init(sequelize);
Data.init(sequelize);

Log.associate(db);
Data.associate(db);

module.exports = db;
