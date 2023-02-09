import {
  BottomBorderStyle,
  LeftBorderStyle,
  RightBorderStyle,
  TopBorderStyle,
} from "./styles";

/**
 * Control panel borders.
 *
 * @remarks
 * Decorative borders.
 */
export const Borders = () => {
  return (
    <>
      <TopBorderStyle />
      <LeftBorderStyle />
      <RightBorderStyle />
      <BottomBorderStyle />
    </>
  );
};
