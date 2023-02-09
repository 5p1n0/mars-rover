import { RoverLocationContext } from "@mr/frontend-core-context";
import { useContext } from "react";

import { RoverIcon } from "./rover-icon";
import { RoverStyle } from "./styles";

/**
 * Minimap rover.
 */
export const Rover = () => {
  const roverLocation = useContext(RoverLocationContext);

  return (
    <RoverStyle point={roverLocation.point}>
      <RoverIcon orientation={roverLocation.orientation} />
    </RoverStyle>
  );
};
