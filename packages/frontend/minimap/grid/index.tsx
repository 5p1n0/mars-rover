import { GridData } from "@mr/common-types";

import { Area } from "./area";

/**
 * Minimap grid.
 *
 * @remarks
 * This component is a wrapper for the areas.
 */
export const Grid = () => {
  const fullSize = GridData.size * GridData.size;

  return (
    <>
      {Array<number>(fullSize)
        .fill(0)
        .map((value: number, index: number) => {
          return <Area key={index} />;
        })}
    </>
  );
};
