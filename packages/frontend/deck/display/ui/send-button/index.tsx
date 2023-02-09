import {
  CommandsQueueContext,
  RoverLocationContext,
} from "@mr/frontend-core-context";
import { socket } from "@mr/frontend-core-socket";
import { useContext } from "react";

import { SendButtonStyle } from "./styles";

/**
 * On-screen send button.
 *
 * @remarks
 * Upload the command queue to the server.
 */
export const SendButton = () => {
  const { commandsQueue, updateCommandsQueue } =
    useContext(CommandsQueueContext);
  const roverLocation = useContext(RoverLocationContext);

  const handleClick = () => {
    socket.emit("commands:execute", roverLocation, commandsQueue);
    updateCommandsQueue("");
  };

  return <SendButtonStyle color="white" onClick={handleClick} />;
};
