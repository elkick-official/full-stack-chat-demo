"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Participant, {
        foreignKey: "roomId",
      });
      this.hasMany(models.Participant, {
        foreignKey: "roomId",
        as: "participantsList",
      });
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });
      this.hasOne(models.Message, {
        foreignKey: "roomId",
        as: "lastMessage",
      });
    }
  }
  Room.init(
    {
      name: { type: DataTypes.STRING, allowNull: true },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "single",
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        comment: "id of users table",
      },
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
