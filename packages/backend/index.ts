/**
 * Server setup
 */
import { ClientToServerEvents, ServerToClientEvents } from "@mr/common-types";
import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import { commandsHandlers } from "./handler";

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 3001;
const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
  cors: {
    origin: "https://mr-prod.onrender.com",
  },
});

const onConnection = (socket: Socket) => {
  commandsHandlers(socket);
};

io.on("connection", onConnection);

httpServer.listen(PORT);
