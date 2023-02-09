import {
  ConnectedStateContext,
  VictoryStateContext,
  WarningStateContext,
} from "@mr/frontend-core-context";
import { useContext } from "react";

import { DeleteButton } from "./delete-button";
import { DismissButton } from "./dismiss-button";
import { Prompt } from "./prompt";
import { SendButton } from "./send-button";

/**
 * Display elements.
 *
 * @remark
 * Diffrent on-screen buttons are shown based on victory/warning state changes.
 */
export const DisplayUiElements = () => {
  const warning = useContext(WarningStateContext).warningState;
  const victory = useContext(VictoryStateContext).victoryState;
  const connected = useContext(ConnectedStateContext);

  return (
    <>
      <Prompt />

      {!warning && !victory && connected && (
        <>
          <DeleteButton />
          <SendButton />
        </>
      )}

      {(warning || victory) && connected && <DismissButton />}
    </>
  );
};
