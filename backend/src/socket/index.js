const clc = require("cli-color");
const moment = require("moment");
const { db } = require("../models");
const { imageUtil } = require("../utils");
const Message = db.Message;

module.exports = function (io) {
  const userList = [];
  const roomList = [];
  let typingUsers = [];
  const checkTyping = () => {
    setInterval(() => {
      let findIdealUser = typingUsers.filter((typingUser) => {
        return (
          moment().subtract(2, "seconds").format("YYYY-MM-DD hh:mm:ss") >
          typingUser.date
        );
      });
      for (const user of findIdealUser) {
        user.isTyping = false;
        typingUsers.splice(0, 1);
        io.to(user?.roomId).emit("typing", user);
      }
    }, 1000);
  };
  io.on("connection", async (socket) => {
    console.log(
      `Your socket connection id Is : ${clc.redBright.underline(socket.id)}`
    );
    socket.on("active_user", (userId) => {
      console.log("ACTIVE_USER_ID====>", userId);
      userList[userId] = socket.id;
    });

    socket.on("join-room", (requestBody) => {
      roomList[requestBody.roomId] = { ...requestBody, socketId: socket.id };
      console.log("ROOM JOINED BY ====>", requestBody);
      socket.join(requestBody.roomId);
      checkTyping();
    });

    socket.on("send-message", async (requestBody) => {
      let savedMessage;
      const prepareSaveMessgae = {
        roomId: requestBody.roomId,
        userId: requestBody.userId,
      };

      if (requestBody.type === "doc") {
        const imageName = await imageUtil.uploadSingleImage(
          "media",
          requestBody.document.fileBase64
        );
        requestBody.document.uploadedMedia = imageName;
        delete requestBody.document.fileBase64;
        prepareSaveMessgae.type = 1;
        prepareSaveMessgae.media = JSON.stringify(requestBody.document);
        savedMessage = await Message.create(prepareSaveMessgae);
      } else if (requestBody.type === "text") {
        prepareSaveMessgae.message = requestBody.message;
        savedMessage = await Message.create(prepareSaveMessgae);
      }
      io.to(requestBody?.roomId).emit(
        "receive-message",
        savedMessage.dataValues
      );
    });

    socket.on("typing", (requestBody) => {
      const isExistsInRoom = typingUsers?.findIndex(
        (typingUser) =>
          typingUser.roomId === requestBody.roomId &&
          typingUser.userId === requestBody.userId
      );
      if (isExistsInRoom != -1) {
        typingUsers[isExistsInRoom].date = moment().format(
          "YYYY-MM-DD hh:mm:ss"
        );
      } else {
        typingUsers.push({
          ...requestBody,
          isTyping: true,
          date: moment().format("YYYY-MM-DD hh:mm:ss"),
        });
      }
      io.to(requestBody?.roomId).emit("typing", {
        ...requestBody,
        isTyping: true,
      });
    });
  });
};
