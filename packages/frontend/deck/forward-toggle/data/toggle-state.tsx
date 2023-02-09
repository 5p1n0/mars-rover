import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type Context = {
  isActive: boolean;
  updateToggleState: (isActive: boolean) => void;
};

const ToggleStateContext = createContext<Context>({} as Context);

/**
 * Toggle state provider.
 *
 * @remarks
 * Share the toggle state and setter.
 */
export const ToggleStateProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  const value = useMemo(() => {
    const updateToggleState = (isActive: boolean) => {
      setIsActive(isActive);
    };

    return {
      isActive,
      updateToggleState,
    };
  }, [isActive]);

  return (
    <ToggleStateContext.Provider value={value}>
      {children}
    </ToggleStateContext.Provider>
  );
};

export const useToggleState = () => useContext(ToggleStateContext);
