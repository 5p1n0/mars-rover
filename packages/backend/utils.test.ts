import { constrainPoint, updateLocation } from "@mr/backend/utils";
import { Location, Orientation, Point } from "@mr/common-types";
import { describe, expect, test, vi } from "vitest";

describe("testing backend util functions", () => {
  test.each`
    location                                                 | commands | expected
    // point field update based on forward (F) and backward (B) commands
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.N }} | ${"F"}   | ${{ point: { x: 0, y: 1 }, orientation: Orientation.N }}
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.N }} | ${"B"}   | ${{ point: { x: 2, y: 1 }, orientation: Orientation.N }}
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.E }} | ${"F"}   | ${{ point: { x: 1, y: 2 }, orientation: Orientation.E }}
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.E }} | ${"B"}   | ${{ point: { x: 1, y: 0 }, orientation: Orientation.E }}
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.S }} | ${"F"}   | ${{ point: { x: 2, y: 1 }, orientation: Orientation.S }}
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.S }} | ${"B"}   | ${{ point: { x: 0, y: 1 }, orientation: Orientation.S }}
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.W }} | ${"F"}   | ${{ point: { x: 1, y: 0 }, orientation: Orientation.W }}
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.W }} | ${"B"}   | ${{ point: { x: 1, y: 2 }, orientation: Orientation.W }}
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.N }} | ${"N"}   | ${{ point: { x: 1, y: 1 }, orientation: Orientation.N }}
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.N }} | ${"E"}   | ${{ point: { x: 1, y: 1 }, orientation: Orientation.E }}
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.N }} | ${"S"}   | ${{ point: { x: 1, y: 1 }, orientation: Orientation.S }}
    ${{ point: { x: 1, y: 1 }, orientation: Orientation.N }} | ${"W"}   | ${{ point: { x: 1, y: 1 }, orientation: Orientation.W }}
  `(
    "updateLocation util: returns $expected when $location is updated based on $commands",
    ({
      location,
      commands,
      expected,
    }: {
      location: Location;
      commands: string;
      expected: Location;
    }) => {
      expect(updateLocation(location, commands)).toStrictEqual(expected);
    }
  );

  test.each`
    point                 | expected
    ${{ x: 1, y: 1 }}     | ${{ x: 1, y: 1 }}
    ${{ x: 6, y: 6 }}     | ${{ x: 6, y: 6 }}
    ${{ x: 0, y: 0 }}     | ${{ x: 6, y: 6 }}
    ${{ x: 8, y: 4 }}     | ${{ x: 2, y: 4 }}
    ${{ x: 5, y: 14 }}    | ${{ x: 5, y: 2 }}
    ${{ x: 52, y: 34 }}   | ${{ x: 4, y: 4 }}
    ${{ x: -3, y: -6 }}   | ${{ x: 3, y: 6 }}
    ${{ x: -34, y: -62 }} | ${{ x: 4, y: 2 }}
  `(
    "constrainPoint util: returns $expected when $point values are contrained between the max/min values for grid's rows and columns",
    ({ point, expected }: { point: Point; expected: Point }) => {
      expect(constrainPoint(point)).toStrictEqual(expected);
    }
  );

  test.each`
    point             | expected
    ${{ x: 3, y: 4 }} | ${{ x: 3, y: 4 }}
    ${{ x: 1, y: 1 }} | ${false}
    ${{ x: 5, y: 5 }} | ${{ x: 5, y: 5 }}
  `(
    "isObstacle util: returns false when $point is not an obstacle else returns it",
    ({ point, expected }: { point: Point; expected: boolean | Point }) => {
      const mockIsObstacle = vi.fn().mockImplementation((point: Point) => {
        const mockObstaclePoints: Point[] = [
          { x: 3, y: 4 },
          { x: 5, y: 5 },
        ];
        for (const op of mockObstaclePoints) {
          if (op.x === point.x && op.y === point.y) return point;
        }
        return false;
      });

      expect(mockIsObstacle(point)).toStrictEqual(expected);
    }
  );

  test.each`
    point             | expected
    ${{ x: 1, y: 1 }} | ${false}
    ${{ x: 5, y: 5 }} | ${{ x: 5, y: 5 }}
  `(
    "isVictory util: returns false when $point is not the victory point else returns it",
    ({ point, expected }: { point: Point; expected: boolean | Point }) => {
      const mockIsVictory = vi.fn().mockImplementation((point: Point) => {
        const mockVictoryPoint: Point = { x: 5, y: 5 };
        if (mockVictoryPoint.x === point.x && mockVictoryPoint.y === point.y)
          return point;
        return false;
      });

      expect(mockIsVictory(point)).toStrictEqual(expected);
    }
  );
});
