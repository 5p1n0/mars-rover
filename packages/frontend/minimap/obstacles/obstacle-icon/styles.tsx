import { Point } from "@mr/common-types";
import styled, { keyframes } from "styled-components";

const landing = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ObstacleIconStyle = styled.div<{ point: Point }>`
  grid-row: ${(props) => props.point.x};
  grid-column: ${(props) => props.point.y};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${landing} 150ms ease-in;
`;

export const IconStyle = styled.span`
  width: 75%;
  height: 75%;
  border: 1px solid black;
  box-shadow: 0 0 0 1px red inset;
  background: repeating-linear-gradient(
    -45deg,
    #0b171e,
    #0b171e 2px,
    transparent 1px,
    transparent 6px
  );

  @media (min-width: 43rem) {
    width: 75%;
    height: 75%;
    border: 2px solid black;
    box-shadow: 0 0 0 2px red inset;
    background: repeating-linear-gradient(
      -45deg,
      #0b171e,
      #0b171e 4px,
      transparent 4px,
      transparent 12px
    );
  }
`;
