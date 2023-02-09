import {
  VictoryStateContext,
  WarningStateContext,
} from "@mr/frontend-core-context";
import { useContext } from "react";

import { DismissButtonStyle } from "./styles";

/**
 * On-screen dismiss button.
 *
 * @remarks
 * Dismiss the victory/warning message.
 */
export const DismissButton = () => {
  const w = useContext(WarningStateContext);
  const v = useContext(VictoryStateContext);

  const handleClick = () => {
    if (w.warningState) w.updateWarningState(false);
    else if (v.victoryState) v.updateVictoryState(false);
  };

  return <DismissButtonStyle color="white" onClick={handleClick} />;
};
