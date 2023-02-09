import { BottomLeftCorner } from "./bl-corner";
import { BottomRightCorner } from "./br-corner";
import { TopLeftCorner } from "./tl-corner";
import { TopRightCorner } from "./tr-corner";

/**
 * Control panel border decals.
 *
 * @remarks
 * Decorative decals.
 */
export const Decals = () => {
  return (
    <>
      <TopLeftCorner />
      <TopRightCorner />
      <BottomLeftCorner />
      <BottomRightCorner />
    </>
  );
};
