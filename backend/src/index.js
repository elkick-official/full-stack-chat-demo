require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const morgan = require("morgan-body");
const moment = require("moment");
const http = require("http");
const clc = require("cli-color");
const socket = require("socket.io");
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/public", express.static(path.join(__dirname, "../public")));

// log file create
const log = fs.createWriteStream(
  path.join(__dirname + "/logs", moment().format("YYYY-MM-DD") + ".log"),
  { flags: "a" }
);

// logs
morgan(app, {
  noColors: true,
  stream: log,
  // maxBodyLength: 1000000,
  filterParameters: [
    "password",
    "repeatPassword",
    "confirmPassword",
    "token",
    "requestToken",
  ],
});

const server = http.createServer(app);
const port = normalizePort(
  process.env["PORT_" + process.env.RUN_MODE] || "3001"
);
app.set("port", port);

app.use("/api", require("./routes"));

server.listen(port, () => {
  console.log(
    `Your Application running on ${clc.green.underline(
      port
    )} in ${clc.green.underline(process.env.RUN_MODE)} Enviourment`
  );
});

let io = socket(server, { cors: { origin: "*" } });
require("../src/socket")(io);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
