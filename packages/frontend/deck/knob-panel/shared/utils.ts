/**
 * Returns the knob position based on an orientation value.
 *
 * @param orientation - Input orientation enum value.
 * @returns A knob position.
 */
export const setKnobFromRover = (orientation: string) => {
  switch (orientation) {
    case "north":
      return 0;
    case "east":
      return 1;
    case "south":
      return 2;
    case "west":
      return 3;
    default:
      return 0;
  }
};
