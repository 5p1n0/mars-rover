export interface ServerToClientEvents {
  "commands:obstacle-point": (p: Point) => void;
  "commands:location": (l: Location) => void;
  "commands:warning": (flag: boolean) => void;
  "commands:victory": (flag: boolean) => void;
}

export interface ClientToServerEvents {
  "commands:execute": (l: Location, commands: string) => void;
}

export interface Point {
  x: number;
  y: number;
}

export enum GridData {
  size = 6,
}

export enum Direction {
  F = "forward",
  B = "backward",
}

export enum Orientation {
  N = "north",
  S = "south",
  W = "west",
  E = "east",
}

export type Location = {
  point: Point;
  orientation: Orientation;
};

export type CommandsQueue = {
  commandsQueue: string;
  updateCommandsQueue: (commandsQueue: string) => void;
};

export type WarningState = {
  warningState: boolean;
  updateWarningState: (warningState: boolean) => void;
};

export type VictoryState = {
  victoryState: boolean;
  updateVictoryState: (victoryState: boolean) => void;
};

export type KnobOrientationState = {
  knobOrientation: number;
  updateKnobOrientation: (val: number) => void;
};
