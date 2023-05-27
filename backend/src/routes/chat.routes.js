const express = require("express");
const router = express.Router();
const { ChatModule } = require("../controllers");
const chatCtrl = new ChatModule.ChatCtrl.ChatController();

router.post("/register", async (req, res) => {
  let result = await chatCtrl.register(req);
  res.status(result.status).send(result);
});

// router.post("/login", async (req, res) => {
//   let result = await chatCtrl.login(req);
//   res.status(result.status).send(result);
// });

// need to change with jwt token
router.get("/room-list/:userId", async (req, res) => {
  let result = await chatCtrl.getRoomList(req);
  res.status(result.status).send(result);
});

// need to change with jwt token
router.get("/message-list/:roomId", async (req, res) => {
  let result = await chatCtrl.getMessagesByRoom(req);
  res.status(result.status).send(result);
});

module.exports = router;
