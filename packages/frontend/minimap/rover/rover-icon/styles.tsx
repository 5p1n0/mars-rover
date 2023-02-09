import { Orientation } from "@mr/common-types";
import { Navigation2 } from "react-feather";
import styled, { keyframes } from "styled-components";

import { getRotationValue } from "../shared";

const landing = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const RoverIconStyle = styled(Navigation2)<{
  orientation: Orientation;
}>`
  width: 12px;
  height: 12px;
  transform: rotate(${(props) => getRotationValue(props.orientation)});
  animation: ${landing} 2s ease-in-out;

  @media (min-width: 43rem) {
    width: 24px;
    height: 24px;
  }
`;
