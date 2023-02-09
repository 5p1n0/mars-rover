import { Orientation } from "@mr/common-types";
import { expect, test } from "vitest";

import { getRandKey } from "./utils";

test("getRandKey util: returns a random Orientation's enum key", () => {
  const key = getRandKey();
  expect(Orientation[key]).not.toBe(undefined);
});
