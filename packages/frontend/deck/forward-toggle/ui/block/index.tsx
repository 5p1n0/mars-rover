import { CommandsQueueContext } from "@mr/frontend-core-context";
import { useContext } from "react";

import { useToggleState } from "../../data";
import { BarStyle, BlockStyle } from "./styles";

/**
 * Toggle main block.
 *
 * @remarks
 * When clicked and the command queue isn't full, adds a forward command to it.
 */
export const Block = () => {
  const { commandsQueue, updateCommandsQueue } =
    useContext(CommandsQueueContext);
  const { isActive, updateToggleState } = useToggleState();

  const handleClick = () => {
    if (commandsQueue.length < 8) {
      updateToggleState(true);
      setTimeout(() => updateToggleState(false), 300);
      updateCommandsQueue(commandsQueue.concat("F"));
    }
  };

  return (
    <BlockStyle onClick={handleClick}>
      <BarStyle isOn={isActive} />
    </BlockStyle>
  );
};
