const { db } = require("../../models");
const { responseModel, bcryptUtil, jwtUtil } = require("../../utils");
const { Op, Sequelize } = require("sequelize");
const UserModel = db.User;
const RoomModel = db.Room;
const ParticipantModel = db.Participant;
const Message = db.Message;

class ChatController {
  constructor() {}
  // Register API
  register = async (req) => {
    try {
      const { email, password, userName } = req.body;

      const isExists = await UserModel.count({ where: { email: email } });

      if (isExists > 0) {
        return responseModel.validationError(
          1,
          "You have already register.",
          null,
          null
        );
      }
      const prepareSaveUser = {
        email: email,
        userName: userName,
        password: await bcryptUtil.bcryptPassword(password),
      };
      const user = await UserModel.create(prepareSaveUser);

      const tokenData = {
        id: user.id,
        email: email,
      };
      if (user.id) {
        const token = await jwtUtil.generateToken(tokenData);
        const userDetails = {
          imageUrl: process.env["IMAGE_URL_" + process.env.RUN_MODE],
          user: user,
          token: token,
        };
        return responseModel.successResponse(
          1,
          "You have registered successfully",
          userDetails
        );
      }
    } catch (error) {
      const errMessage = typeof error == "string" ? error : error.message;
      return responseModel.serverError(
        0,
        "Something went wrong.",
        {},
        errMessage
      );
    }
  };

  getRoomList = async (req) => {
    try {
      const { userId } = req.params;
      const roomList = await RoomModel.findAll({
        attributes: { exclude: ["userId"] },
        include: [
          {
            model: ParticipantModel,
            where: { userId: { [Op.in]: [userId] } },
            attributes: [],
          },
          {
            model: ParticipantModel,
            // where: { userId: { [Op.ne]: [userId] } },
            attributes: ["userId"],
            include: [
              {
                model: UserModel,
                as: "user",
                attributes: ["name", "profileImage"],
              },
            ],
            as: "participantsList",
          },
          {
            model: Message,
            where: {
              id: {
                [Op.in]: Sequelize.literal(
                  `(select max(id) from messages GROUP BY roomId)`
                ),
              },
            },
            include: [
              {
                model: UserModel,
                as: "user",
                attributes: ["name"],
              },
            ],
            required: false,
            as: "lastMessage",
          },
        ],
      });
      const imageUrl = process.env["IMAGE_URL_" + process.env.RUN_MODE];
      return responseModel.successResponse(1, "Room list retrived.", {
        imageUrl,
        roomList,
      });
    } catch (error) {
      const errMessage = typeof error == "string" ? error : error.message;
      return responseModel.serverError(
        0,
        "Something went wrong.",
        {},
        errMessage
      );
    }
  };

  getMessagesByRoom = async (req) => {
    try {
      const { roomId } = req.params;
      const { page, pageSize } = req.query;
      const offset = (parseInt(page) - 1) * parseInt(pageSize);
      const limit = parseInt(pageSize);
      const messageList = await Message.findAll({
        where: {
          roomId: roomId,
        },
        include: [
          {
            model: UserModel,
            as: "user",
            attributes: ["name", "profileImage"],
          },
        ],
        offset,
        limit,
        order: [["createdAt", "DESC"]],
      });
      const imageUrl = process.env["IMAGE_URL_" + process.env.RUN_MODE];
      return responseModel.successResponse(1, "Room list retrived.", {
        imageUrl,
        messageList,
      });
    } catch (error) {
      const errMessage = typeof error == "string" ? error : error.message;
      return responseModel.serverError(
        0,
        "Something went wrong.",
        {},
        errMessage
      );
    }
  };
}
module.exports = { ChatController };
