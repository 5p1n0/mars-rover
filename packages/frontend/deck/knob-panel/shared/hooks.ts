import { RoverLocationContext } from "@mr/frontend-core-context";
import { useContext, useMemo, useState } from "react";

import { setKnobFromRover } from "./utils";

/**
 * Returns an object with the knob orientation and a function to update it.
 *
 * @remarks
 * The initial knob orientation value is derived from the rover.
 */
export const useKnobOrientationState = () => {
  const roverOrientation = useContext(RoverLocationContext).orientation;
  const [knobOrientation, setKnobOrientation] = useState(
    setKnobFromRover(roverOrientation)
  );

  return useMemo(() => {
    const updateKnobOrientation = (knobOrientation: number) => {
      setKnobOrientation(knobOrientation);
    };

    return {
      knobOrientation,
      updateKnobOrientation,
    };
  }, [knobOrientation]);
};
