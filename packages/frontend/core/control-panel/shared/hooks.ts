import { Location } from "@mr/common-types";
import { socket } from "@mr/frontend-core-socket";
import { useEffect, useMemo, useState } from "react";

import { createLocation } from "./utils";

/**
 * Returns the rover location on the minimap.
 *
 * @remarks
 * Also defines a socket event to auto-update the rover location when it changes.
 */
export const useRoverLocationSocket = () => {
  const [location, setLocation] = useState<Location>(createLocation);

  useEffect(() => {
    socket.on("commands:location", (data: Location) => {
      setLocation(data);
    });

    return () => {
      socket.off("commands:location");
    };
  }, []);

  return useMemo(() => location, [location]);
};

/**
 * Returns an object with the command queue and a function to update it.
 */
export const useCommandQueueState = () => {
  const [commandsQueue, setCommandsQueue] = useState("");

  return useMemo(() => {
    const updateCommandsQueue = (commandsQueue: string) => {
      setCommandsQueue(commandsQueue);
    };

    return {
      commandsQueue,
      updateCommandsQueue,
    };
  }, [commandsQueue]);
};

/**
 * Returns an object with the warning state and a function to update it.
 *
 * @remarks
 * Also defines a socket event to auto-update the warning state when it changes.
 */
export const useWarningState = () => {
  const [warningState, setWarningState] = useState(false);

  useEffect(() => {
    socket.on("commands:warning", (data: boolean) => {
      setWarningState(data);
    });

    return () => {
      socket.off("commands:warning");
    };
  }, []);

  return useMemo(() => {
    const updateWarningState = (warningState: boolean) => {
      setWarningState(warningState);
    };

    return {
      warningState,
      updateWarningState,
    };
  }, [warningState]);
};

/**
 * Returns an object with the victory state and a function to update it.
 *
 * @remarks
 * Also defines a socket event to auto-update the victory state when it changes.
 */
export const useVictoryState = () => {
  const [victoryState, setVictoryState] = useState(false);

  useEffect(() => {
    socket.on("commands:victory", (data: boolean) => {
      setVictoryState(data);
    });

    return () => {
      socket.off("commands:victory");
    };
  }, []);

  return useMemo(() => {
    const updateVictoryState = (victoryState: boolean) => {
      setVictoryState(victoryState);
    };

    return {
      victoryState,
      updateVictoryState,
    };
  }, [victoryState]);
};
