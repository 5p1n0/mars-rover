import { ClientToServerEvents, ServerToClientEvents } from "@mr/common-types";
import { io, Socket } from "socket.io-client";

/**
 * Socket.io client.
 *
 * @remarks
 * Client initialization.
 */
export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "https://mr-backend.onrender.com/"
);
