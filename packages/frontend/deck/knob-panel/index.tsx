import { KnobOrientationProvider } from "./data";
import { KnobPanelStyle } from "./styles";
import { KnobPanelUiElements } from "./ui";

/**
 * Control deck knob panel.
 */
export const KnobPanel = () => {
  return (
    <KnobPanelStyle>
      <KnobOrientationProvider>
        <KnobPanelUiElements />
      </KnobOrientationProvider>
    </KnobPanelStyle>
  );
};
