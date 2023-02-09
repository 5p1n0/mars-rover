import Knob, { composeTwo, useAngleUpdater } from "react-dial-knob";

import { useKnobOrientationContext } from "../../data";
import { KnobDial } from "./dial";

/**
 * Knob.
 *
 * @remarks
 * Rotate to a label when clicked or dragged and adds a orientation command to the commands queue.
 */
export const CustomKnob = () => {
  const { knobOrientation, updateKnobOrientation } =
    useKnobOrientationContext();
  const [angle, setAngle] = useAngleUpdater(knobOrientation);
  const onAngleChangeHandler = composeTwo<number>(setAngle, () => null);

  return (
    <Knob
      diameter={120}
      ariaLabelledBy="knob"
      value={knobOrientation}
      min={0}
      max={3}
      step={1}
      knobStyle={{
        cursor: "pointer",
        order: 2,
        overflow: "visible",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onAngleChange={onAngleChangeHandler}
      onValueChange={(knobOrientation: number) =>
        updateKnobOrientation(knobOrientation)
      }
    >
      <KnobDial angle={angle} />
    </Knob>
  );
};
