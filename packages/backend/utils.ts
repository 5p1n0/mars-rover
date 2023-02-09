import { GridData, Location, Orientation, Point } from "@mr/common-types";
import { getRandomArbitrary, getRandPoint } from "@mr/common-utils";

/**
 * Update a location object fields.
 *
 * @param l - Input location.
 * @param c - Command that tells how to update the fields.
 * @returns `l` with updated fields.
 */
export const updateLocation = (l: Location, c: string) => {
  if (c === "F" || c === "B") {
    switch (l.orientation) {
      case Orientation.N:
        if (c === "F") l.point.x--;
        else l.point.x++;
        return l;

      case Orientation.S:
        if (c === "F") l.point.x++;
        else l.point.x--;
        return l;

      case Orientation.W:
        if (c === "F") l.point.y--;
        else l.point.y++;
        return l;

      case Orientation.E:
        if (c === "F") l.point.y++;
        else l.point.y--;
        return l;

      default:
        return l;
    }
  } else {
    switch (c) {
      case "N":
        l.orientation = Orientation["N"];
        return l;

      case "S":
        l.orientation = Orientation["S"];
        return l;

      case "W":
        l.orientation = Orientation["W"];
        return l;

      case "E":
        l.orientation = Orientation["E"];
        return l;

      default:
        return l;
    }
  }
};

const victoryPoint = getRandPoint();

/**
 * Random list of obstacle points.
 */
const obstaclePoints = Array<number>(getRandomArbitrary(1, 16))
  .fill(0)
  .map(() => {
    // check to prevent having an obstacle equal to the victory point
    let point = getRandPoint();
    while (JSON.stringify(point) === JSON.stringify(victoryPoint))
      point = getRandPoint();
    return point;
  });

/**
 * Check if a point is an obstacleW.
 *
 * @param p - Input point.
 * @returns `p` if it's an obstacle else false.
 */
export const isObstacle = (p: Point): Point | boolean => {
  console.log("obstacle points:", obstaclePoints);
  for (const op of obstaclePoints) {
    if (op.x === p.x && op.y === p.y) return p;
  }
  return false;
};

/**
 * Check if a point is the victory point.
 *
 * @param p - Input point.
 * @returns `p` if it's the victory point else false.
 */
export const isVictory = (p: Point): Point | boolean => {
  console.log("victory point:", victoryPoint);
  if (victoryPoint && victoryPoint.x === p.x && victoryPoint.y === p.y)
    return p;
  return false;
};

/**
 * Constrain a number between the min/max number of rows/cols inside the minimap grid.
 *
 * @param value - Number to constrain.
 * @return The constrained `value`.
 */
const constrainValue = (value: number) => {
  const wrappedValue =
    value - Math.trunc(value / GridData.size) * GridData.size;
  const unsignedValue =
    Math.sign(wrappedValue) < 0 ? wrappedValue * -1 : wrappedValue;
  if (unsignedValue) return unsignedValue;
  else return GridData.size;
};

/**
 * Returns a constrained point.
 *
 * @param p - Input point.
 * @returns `p` with constrained field values.
 */
export const constrainPoint = (p: Point): any => {
  return Object.fromEntries(
    Object.entries(p).map(([k, v]) => [k, constrainValue(v)])
  );
};
