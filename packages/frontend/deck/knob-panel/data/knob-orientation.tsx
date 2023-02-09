import { KnobOrientationState } from "@mr/common-types";
import { createContext, ReactNode, useContext } from "react";

import { useKnobOrientationState } from "../shared/hooks";

const KnobOrientationContext = createContext<KnobOrientationState>(
  {} as KnobOrientationState
);

/**
 * Knob orientation provider.
 *
 * @remarks
 * Share the knob orientation.
 */
export const KnobOrientationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const value = useKnobOrientationState();

  return (
    <KnobOrientationContext.Provider value={value}>
      {children}
    </KnobOrientationContext.Provider>
  );
};

export const useKnobOrientationContext = () =>
  useContext(KnobOrientationContext);
