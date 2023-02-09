import { ToggleStateProvider } from "./data";
import { BackwardToggleStyle } from "./styles";
import { Toggle } from "./ui";

/**
 * Backward toggle panel.
 */
export const BackwardToggle = () => {
  return (
    <BackwardToggleStyle>
      <ToggleStateProvider>
        <Toggle />
      </ToggleStateProvider>
    </BackwardToggleStyle>
  );
};
