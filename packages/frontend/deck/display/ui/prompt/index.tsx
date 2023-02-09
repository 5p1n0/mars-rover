import {
  CommandsQueueContext,
  ConnectedStateContext,
  VictoryStateContext,
  WarningStateContext,
} from "@mr/frontend-core-context";
import { useContext } from "react";

import { AlertStyle, PromptStyle } from "./styles";

/**
 * Display prompt.
 *
 * @remarks
 * Shows a different prompt based on connected/victory/warning state values.
 */
export const Prompt = () => {
  const { commandsQueue } = useContext(CommandsQueueContext);
  const isFull = commandsQueue?.length === 8 ? true : false;
  const warning = useContext(WarningStateContext).warningState;
  const victory = useContext(VictoryStateContext).victoryState;
  const connected = useContext(ConnectedStateContext);

  return (
    <>
      {!warning && !victory && connected && (
        <PromptStyle basis={70}>
          Commands Queue:
          <br />
          {commandsQueue + " "}
          {isFull && <AlertStyle>Full!</AlertStyle>}
        </PromptStyle>
      )}

      {warning && connected && (
        <PromptStyle basis={90}>
          Warning,
          <br />
          Obstacle detected!
        </PromptStyle>
      )}

      {victory && connected && (
        <PromptStyle basis={90}>Material samples discovered!</PromptStyle>
      )}

      {!connected && (
        <PromptStyle basis={90}>Error: No server connection</PromptStyle>
      )}
    </>
  );
};
