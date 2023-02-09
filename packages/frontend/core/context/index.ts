import {
  CommandsQueue,
  Location,
  VictoryState,
  WarningState,
} from "@mr/common-types";
import { createContext } from "react";

/**
 * Globally shared context.
 */
export const CommandsQueueContext = createContext<CommandsQueue>(
  {} as CommandsQueue
);

/**
 * Globally shared context.
 */
export const RoverLocationContext = createContext<Location>({} as Location);

/**
 * Globally shared context.
 */
export const WarningStateContext = createContext<WarningState>(
  {} as WarningState
);

/**
 * Globally shared context.
 */
export const VictoryStateContext = createContext<VictoryState>(
  {} as VictoryState
);

/**
 * Globally shared context.
 */
export const ConnectedStateContext = createContext(false);
