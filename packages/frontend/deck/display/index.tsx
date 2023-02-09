import {
  ConnectedStateContext,
  VictoryStateContext,
  WarningStateContext,
} from "@mr/frontend-core-context";
import { useContext } from "react";

import { DisplayStyle } from "./styles";
import { DisplayUiElements } from "./ui";

/**
 * Control deck display.
 *
 * @remarks
 * Shows on-screen buttons to delete commands from the queue and to upload it to the server.
 * Also shows different promps on warning/victory state changes.
 */
export const Display = () => {
  const warning = useContext(WarningStateContext).warningState;
  const victory = useContext(VictoryStateContext).victoryState;
  const connected = useContext(ConnectedStateContext);

  return (
    <DisplayStyle warning={warning || !connected} victory={victory}>
      <DisplayUiElements />
    </DisplayStyle>
  );
};
