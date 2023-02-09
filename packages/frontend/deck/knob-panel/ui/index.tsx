import { CustomKnob } from "./custom-knob";
import { Decals } from "./decals";
import { Labels } from "./labels";

/**
 * knob panel elements.
 */
export const KnobPanelUiElements = () => {
  return (
    <>
      <CustomKnob />
      <Labels />
      <Decals />
    </>
  );
};
