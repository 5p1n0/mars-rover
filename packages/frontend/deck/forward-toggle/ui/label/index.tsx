import { ReactNode } from "react";

import { useToggleState } from "../../data";
import { LabelStyle } from "./styles";

type LabelProps = {
  children: ReactNode;
};

/**
 * Toggle command label.
 */
export const Label = ({ children }: LabelProps) => {
  const { isActive } = useToggleState();

  return <LabelStyle isSelected={isActive}>{children}</LabelStyle>;
};
