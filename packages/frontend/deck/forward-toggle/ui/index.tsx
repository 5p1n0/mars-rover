import { ActivityLight } from "./activity-light";
import { Block } from "./block";
import { Label } from "./label";
import { Lines } from "./lines";

/**
 * Forward toggle.
 */
export const Toggle = () => {
  return (
    <>
      <Label>F</Label>
      <Block />
      <Lines />
      <ActivityLight />
    </>
  );
};
