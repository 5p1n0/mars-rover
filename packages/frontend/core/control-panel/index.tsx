import {
  CommandsQueueProvider,
  RoverLocationProvider,
  VictoryStateProvider,
  WarningStateProvider,
} from "./data";
import { ControlPanelStyle } from "./styles";
import { ControlPanelElements } from "./ui";

/**
 * Rover control panel.
 */
export const ControlPanel = () => {
  return (
    <>
      <ControlPanelStyle id="control-panel">
        <CommandsQueueProvider>
          <WarningStateProvider>
            <VictoryStateProvider>
              <RoverLocationProvider>
                <ControlPanelElements />
              </RoverLocationProvider>
            </VictoryStateProvider>
          </WarningStateProvider>
        </CommandsQueueProvider>
      </ControlPanelStyle>
    </>
  );
};
