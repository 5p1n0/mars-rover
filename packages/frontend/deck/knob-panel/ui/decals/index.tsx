import {
  BottomLeftDecalStyle,
  BottomRightDecalStyle,
  TopLeftDecalStyle,
  TopRightDecalStyle,
} from "./styles";

/**
 * Knob panel decals.
 *
 * @remarks
 * Decorative decals.
 */
export const Decals = () => {
  return (
    <>
      <TopLeftDecalStyle />
      <TopRightDecalStyle />
      <BottomLeftDecalStyle />
      <BottomRightDecalStyle />
    </>
  );
};
