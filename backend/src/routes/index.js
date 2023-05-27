const express = require("express");
const router = express.Router();

router.use("/v1/chat", require("./chat.routes"));

module.exports = router;
