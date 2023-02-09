import { Borders } from "./borders";
import { Decals } from "./decals";
import { Deck } from "./deck-panel";
import { Minimap } from "./minimap-panel";
/**
 * Control panel elements wrapper
 */
export const ControlPanelElements = () => {
  return (
    <>
      <Decals />
      <Borders />
      <Deck />
      <Minimap />
    </>
  );
};
