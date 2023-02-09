import { GridData } from "@mr/common-types";

/**
 * Returns a number between min and max.
 *
 * @param min - Input number.
 * @param max - Input number.
 * @returns A number within the range (min <= number <= max).
 */
export const getRandomArbitrary = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Returns a point object.
 */
export const getRandPoint = () => {
  return {
    x: getRandomArbitrary(1, GridData.size),
    y: getRandomArbitrary(1, GridData.size),
  };
};
