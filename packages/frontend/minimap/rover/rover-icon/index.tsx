import { Orientation } from "@mr/common-types";

import { RoverIconStyle } from "./styles";

/**
 * Rover icon.
 *
 * @param orientation - icon orientation.
 */
export const RoverIcon = ({ orientation }: { orientation: Orientation }) => {
  return (
    <RoverIconStyle orientation={orientation} fill="#0b171e" color="#0b171e" />
  );
};
