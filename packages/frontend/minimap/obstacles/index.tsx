import { Point } from "@mr/common-types";

import { ObstacleIcon } from "./obstacle-icon";
import { useObstacleSocket } from "./shared";

/**
 * Minimap obstacles.
 *
 * @remarks
 * This component is a wrapper for the obstacles.
 */
export const Obstacles = () => {
  const obstacles = useObstacleSocket();

  return (
    <>
      {obstacles.map((obstacle: Point, index: number) => {
        return <ObstacleIcon obstacle={obstacle} key={index} />;
      })}
    </>
  );
};
