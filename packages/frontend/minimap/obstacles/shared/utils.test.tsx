import { Point } from "@mr/common-types";
import { expect, test } from "vitest";

import { isNew } from "./utils";

test.each`
  obstacles                                           | newObstacle       | output
  ${[{ x: 1, y: 1 }, { x: 3, y: 4 }, { x: 2, y: 1 }]} | ${{ x: 3, y: 3 }} | ${true}
  ${[{ x: 1, y: 1 }, { x: 3, y: 4 }, { x: 2, y: 1 }]} | ${{ x: 3, y: 4 }} | ${false}
`(
  "isDifferent util: returns $output if $newObstacle isn't in $obstacles",
  ({
    obstacles,
    newObstacle,
    output,
  }: {
    obstacles: Point[];
    newObstacle: Point;
    output: boolean;
  }) => {
    expect(isNew(obstacles, newObstacle)).toStrictEqual(output);
  }
);
