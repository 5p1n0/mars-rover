import {
  AreaStyle,
  PlusIconBottomLeftStyle,
  PlusIconBottomRightStyle,
  PlusIconTopLeftStyle,
  PlusIconTopRightStyle,
} from "./styles";

/**
 * Grid area.
 *
 * @remarks
 * Each area have markers on its corners as delimiters.
 */
export const Area = () => {
  return (
    <AreaStyle>
      <PlusIconTopLeftStyle color="#0b171e" size={6} />
      <PlusIconTopRightStyle color="#0b171e" size={6} />
      <PlusIconBottomLeftStyle color="#0b171e" size={6} />
      <PlusIconBottomRightStyle color="#0b171e" size={6} />
    </AreaStyle>
  );
};
