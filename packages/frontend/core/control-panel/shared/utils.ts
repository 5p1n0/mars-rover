import { Orientation } from "@mr/common-types";
import { getRandPoint } from "@mr/common-utils";

/**
 * Returns a random orientation enum key
 */
export const getRandKey = () => {
  const index = Math.floor(Math.random() * Object.keys(Orientation).length);
  return Object.keys(Orientation)[index] as keyof typeof Orientation;
};

/**
 * Returns a random orientation enum
 */
const getRandOrientation = () => {
  const key = getRandKey();
  return Orientation[key];
};

/**
 * Returns a new location object
 */
export const createLocation = () => {
  return {
    point: getRandPoint(),
    orientation: getRandOrientation(),
  };
};
