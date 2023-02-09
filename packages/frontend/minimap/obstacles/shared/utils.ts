import { Point } from "@mr/common-types";

/**
 * Test if an obstacle is new.
 *
 * @param obstacles - An array containing all the found obstacles.
 * @param testObstacle - An obstacle to be tested.
 * @returns True if `testObstacle` is already present in `obstacles` else false.
 */
export const isNew = (obstacles: Point[], testObstacle: Point) => {
  return (
    !obstacles.length ||
    obstacles.every(
      (obstacle: Point) =>
        JSON.stringify(obstacle) !== JSON.stringify(testObstacle)
    )
  );
};
