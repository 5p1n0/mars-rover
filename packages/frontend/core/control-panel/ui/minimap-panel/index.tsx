import { Grid } from "@mr/frontend-minimap-grid";
import { Obstacles } from "@mr/frontend-minimap-obstacles";
import { Rover } from "@mr/frontend-minimap-rover";

import { Decals } from "./decals";
import { HudStyle, MinimapStyle } from "./styles";

/**
 * Rover Minimap.
 *
 * @remarks
 * The minimap shows the rover position on the grid.
 */
export const Minimap = () => {
  return (
    <MinimapStyle>
      <Decals />
      <HudStyle>
        <Grid />
        <Obstacles />
        <Rover />
      </HudStyle>
    </MinimapStyle>
  );
};
