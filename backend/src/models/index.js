const Sequelize = require("sequelize");
const path = require("path");
const config = require(path.join(__dirname, "/../config/default.json"));
const dbConfig = config.mysql;

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Room = require("./room")(sequelize, Sequelize);
db.Participant = require("./participant")(sequelize, Sequelize);
db.Message = require("./message")(sequelize, Sequelize);

db.Room.associate(sequelize.models);
db.Participant.associate(sequelize.models);
db.Message.associate(sequelize.models);

module.exports = { db };
