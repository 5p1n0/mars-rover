import { expect, test } from "vitest";

import { setKnobFromRover } from "./utils";

test.each([
  ["north", 0],
  ["east", 1],
  ["south", 2],
  ["west", 3],
])(
  "setKnobFromRover util: returns $value with $orientation as input",
  (orientation: string, value: number) => {
    expect(setKnobFromRover(orientation)).toBe(value);
  }
);
