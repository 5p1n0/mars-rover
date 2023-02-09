import { Orientation } from "@mr/common-types";
import { expect, test } from "vitest";

import { getRotationValue } from "./utils";

test.each([
  [Orientation.N, "0deg"],
  [Orientation.E, "90deg"],
  [Orientation.S, "180deg"],
  [Orientation.W, "-90deg"],
])(
  "getRotationValue util: returns $angle with $orientation as input",
  (orientation: Orientation, angle: string) => {
    expect(getRotationValue(orientation)).toBe(angle);
  }
);
