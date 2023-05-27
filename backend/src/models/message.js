"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  Message.init(
    {
      roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Room",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        comment: "id of rooms table",
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
      message: { type: DataTypes.STRING, allowNull: true },
      media: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "uploaded document name here",
      },
      type: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        comment: "type of the message ( 0.text message / 1. document message )	",
      },
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
