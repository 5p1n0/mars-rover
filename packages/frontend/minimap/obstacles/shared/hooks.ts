import { Point } from "@mr/common-types";
import { socket } from "@mr/frontend-core-socket";
import { useEffect, useState } from "react";

import { isNew } from "./utils";

/**
 * Returns an array containing all found obstacles.
 *
 * @remarks
 * Also defines a socket event to auto-update the array when a new obstacle is found.
 */
export const useObstacleSocket = () => {
  const [obstacles, setObstacles] = useState<Point[]>([]);

  useEffect(() => {
    socket.on("commands:obstacle-point", (data: Point) => {
      if (isNew(obstacles, data)) setObstacles([...obstacles, data]);
    });

    return () => {
      socket.off("commands:obstacle-point");
    };
  }, [obstacles]);

  return obstacles;
};
