import { Orientation } from "@mr/common-types";

/**
 * Returns a value in degree based on the input orientation.
 *
 * @param orientation - Input orientation.
 * @returns A string with a value in degree.
 */
export const getRotationValue = (orientation: Orientation) => {
  switch (orientation) {
    case Orientation.N:
      return `0deg`;
    case Orientation.S:
      return `180deg`;
    case Orientation.W:
      return `-90deg`;
    case Orientation.E:
      return `90deg`;
    default:
      break;
  }
};
