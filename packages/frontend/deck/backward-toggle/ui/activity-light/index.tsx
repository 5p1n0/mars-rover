import { useToggleState } from "../../data";
import { ActivityLightStyle } from "./styles";

/**
 * Toggle activity light.
 */
export const ActivityLight = () => {
  const { isActive } = useToggleState();

  return <ActivityLightStyle isOn={isActive} />;
};
