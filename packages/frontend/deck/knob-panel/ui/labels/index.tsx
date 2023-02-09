import { useKnobOrientationContext } from "../../data";
import {
  EastLabelStyle,
  NorthLabelStyle,
  SouthLabelStyle,
  WestLabelStyle,
} from "./styles";

/**
 * Knob panel labels.
 *
 * @remaks
 * Each label shows a knob orientation command and changes its background when selected.
 */
export const Labels = () => {
  const knobOrientation = useKnobOrientationContext().knobOrientation;

  return (
    <>
      <NorthLabelStyle selected={knobOrientation === 0}>N</NorthLabelStyle>
      <EastLabelStyle selected={knobOrientation === 1}>E</EastLabelStyle>
      <SouthLabelStyle selected={knobOrientation === 2}>S</SouthLabelStyle>
      <WestLabelStyle selected={knobOrientation === 3}>W</WestLabelStyle>
    </>
  );
};
