import { getRandomArbitrary } from "@mr/common-utils";
import { expect, test } from "vitest";

test.each([
  [34, 80],
  [1, 6],
  [-15, -3],
])(
  "getRandomArbitrary util: returns a value between $min and $max (n > $min && n < $max)",
  (min: number, max: number) => {
    expect(getRandomArbitrary(min, max)).toBeLessThanOrEqual(max);
    expect(getRandomArbitrary(min, max)).toBeGreaterThanOrEqual(min);
  }
);
