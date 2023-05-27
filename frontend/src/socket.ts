import { io } from "socket.io-client";
import { config } from "./config";
const socketUrl: string = config.SCOKET_URL || "";
export const socket = io(socketUrl);
