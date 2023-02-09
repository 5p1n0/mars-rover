import { ConnectedStateContext } from "@mr/frontend-core-context";
import { ReactNode } from "react";

import { useConnectedState } from "../shared";

/**
 * Connection state provider.
 *
 * @remarks
 * Share the server connection state.
 */
export const ConnectedStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const value = useConnectedState();

  return (
    <ConnectedStateContext.Provider value={value}>
      {children}
    </ConnectedStateContext.Provider>
  );
};
