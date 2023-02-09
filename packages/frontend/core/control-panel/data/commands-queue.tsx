import { CommandsQueueContext } from "@mr/frontend-core-context";
import { ReactNode } from "react";

import { useCommandQueueState } from "../shared";

/**
 * Commands queue provider.
 *
 * @remarks
 * Share the commands queue state and setter.
 */
export const CommandsQueueProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const value = useCommandQueueState();

  return (
    <CommandsQueueContext.Provider value={value}>
      {children}
    </CommandsQueueContext.Provider>
  );
};
