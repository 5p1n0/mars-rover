import { RoverLocationContext } from "@mr/frontend-core-context";
import { ReactNode } from "react";

import { useRoverLocationSocket } from "../shared";

/**
 * Rover location provider.
 *
 * @remarks
 * Share the rover location state and setter.
 */
export const RoverLocationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const value = useRoverLocationSocket();

  return (
    <RoverLocationContext.Provider value={value}>
      {children}
    </RoverLocationContext.Provider>
  );
};
