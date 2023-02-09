import { Location } from "@mr/common-types";
import { Socket } from "socket.io";

import { constrainPoint, isObstacle, isVictory, updateLocation } from "./utils";

export const commandsHandlers = (socket: Socket) => {
  /**
   * Socket handler
   *
   * @remarks
   * If an obstacle point is reached,
   * socket events will be emitted with:
   *  - a warning state
   *  - the obstacle point reached
   *
   * If a victory point is reached,
   * socket events will be emitted with:
   *  - a victory state
   *  - `l` with updated point field
   *
   * If no obstacle/victory point is reached,
   * a socket event wil be emitted with `l` with updated fields.
   *
   * @param l - input location object.
   * @param commands - commands string to execute.
   */
  const onExecuteCommands = (l: Location, commands: string) => {
    commands.split("").every((c: string) => {
      l = updateLocation(l, c);
      l.point = constrainPoint(l.point);
      if (isObstacle(l.point) && (c === "F" || c === "B")) {
        socket.emit("commands:obstacle-point", l.point);
        socket.emit("commands:warning", true);
        // stop commands execution
        return false;
      } else if (isVictory(l.point) && (c === "F" || c === "B")) {
        socket.emit("commands:victory", true);
        socket.emit("commands:location", l);
        // stop commands execution
        return false;
      } else {
        socket.emit("commands:location", l);
      }
      // continue commands execution
      return true;
    });
  };

  socket.on("commands:execute", onExecuteCommands);
};
