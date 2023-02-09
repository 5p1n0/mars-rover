import { ActivityLight } from "./activity-light";
import { Block } from "./block";
import { Label } from "./label";
import { Lines } from "./lines";

/**
 * Backward toggle.
 */
export const Toggle = () => {
  return (
    <>
      <Label>B</Label>
      <Block />
      <Lines />
      <ActivityLight />
    </>
  );
};
