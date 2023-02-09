import { CommandsQueueContext } from "@mr/frontend-core-context";
import { useContext } from "react";

import { DeleteButtonStyle } from "./styles";
/**
 * On-screen delete button.
 *
 * @remarks
 * When clicked, removes the last command on the queue.
 */
export const DeleteButton = () => {
  const { commandsQueue, updateCommandsQueue } =
    useContext(CommandsQueueContext);

  const handleClick = () =>
    updateCommandsQueue(commandsQueue.substring(0, commandsQueue.length - 1));

  return <DeleteButtonStyle color="white" onClick={handleClick} />;
};
