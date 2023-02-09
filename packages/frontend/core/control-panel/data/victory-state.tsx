import { VictoryStateContext } from "@mr/frontend-core-context";
import { ReactNode } from "react";

import { useVictoryState } from "../shared";

/**
 * Victory state provider.
 *
 * @remarks
 * Share the victory state and setter.
 */
export const VictoryStateProvider = ({ children }: { children: ReactNode }) => {
  const value = useVictoryState();

  return (
    <VictoryStateContext.Provider value={value}>
      {children}
    </VictoryStateContext.Provider>
  );
};
