import { Point } from "@mr/common-types";

import { IconStyle, ObstacleIconStyle } from "./styles";

/**
 * Obstacle icon.
 *
 * @param obstacle - Input point.
 */
export const ObstacleIcon = ({ obstacle }: { obstacle: Point }) => {
  return (
    <ObstacleIconStyle point={obstacle}>
      <IconStyle />
    </ObstacleIconStyle>
  );
};
