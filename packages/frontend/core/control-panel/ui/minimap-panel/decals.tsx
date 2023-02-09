import {
  BottomLeftDecalStyle,
  BottomRightDecalStyle,
  TopLeftDecalStyle,
  TopRightDecalStyle,
} from "./decals.styles";

/**
 * Minimap border decals.
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
