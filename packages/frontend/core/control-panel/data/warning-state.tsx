import { WarningStateContext } from "@mr/frontend-core-context";
import { ReactNode } from "react";

import { useWarningState } from "../shared";

/**
 * Warning state provider.
 *
 * @remarks
 * Share the warning state and setter.
 */
export const WarningStateProvider = ({ children }: { children: ReactNode }) => {
  const value = useWarningState();

  return (
    <WarningStateContext.Provider value={value}>
      {children}
    </WarningStateContext.Provider>
  );
};
