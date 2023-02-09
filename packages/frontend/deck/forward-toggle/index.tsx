import { ToggleStateProvider } from "./data";
import { ForwardToggleStyle } from "./styles";
import { Toggle } from "./ui";

/**
 * Forward toggle panel.
 */
export const ForwardToggle = () => {
  return (
    <ForwardToggleStyle>
      <ToggleStateProvider>
        <Toggle />
      </ToggleStateProvider>
    </ForwardToggleStyle>
  );
};
