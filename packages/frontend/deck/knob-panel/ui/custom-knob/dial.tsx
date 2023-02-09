import { CommandsQueueContext } from "@mr/frontend-core-context";
import { useContext } from "react";

import { useKnobOrientationContext } from "../../data";
import { KnobDialStyle, KnobNeddleStyle } from "./dial.styles";

/**
 * Knob dial.
 *
 * @remarks
 * Shows knob direction.
 */
export const KnobDial = ({ angle }: { angle: number }) => {
  const { commandsQueue, updateCommandsQueue } =
    useContext(CommandsQueueContext);

  const knobOrientation = useKnobOrientationContext().knobOrientation;

  const handleClick = () => {
    if (commandsQueue.length < 8) {
      switch (knobOrientation) {
        case 0:
          updateCommandsQueue(commandsQueue.concat("N"));
          break;
        case 1:
          updateCommandsQueue(commandsQueue.concat("E"));
          break;
        case 2:
          updateCommandsQueue(commandsQueue.concat("S"));
          break;
        case 3:
          updateCommandsQueue(commandsQueue.concat("W"));
          break;
        default:
          break;
      }
    }
  };

  return (
    <KnobDialStyle angle={angle} onClick={handleClick}>
      <KnobNeddleStyle />
    </KnobDialStyle>
  );
};
