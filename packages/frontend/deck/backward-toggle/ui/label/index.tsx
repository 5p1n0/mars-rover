import { ReactNode } from "react";

import { useToggleState } from "../../data";
import { LabelStyle } from "./styles";

/**
 * Toggle command label.
 */
export const Label = ({ children }: { children: ReactNode }) => {
  const { isActive } = useToggleState();

  return <LabelStyle isSelected={isActive}>{children}</LabelStyle>;
};
