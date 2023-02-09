import { Point } from "@mr/common-types";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const landing = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const RoverStyle = styled.div<{ point: Point }>`
  grid-row: ${(props) => props.point.x};
  grid-column: ${(props) => props.point.y};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${landing} 1s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%230B171EFF' stroke-width='4' stroke-dasharray='50%25%2c 15%25' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e");
    border-radius: 100px;
    animation: ${rotate} 4s linear infinite, ${landing} 2s ease-in-out;

    @media (min-width: 43rem) {
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%230B171EFF' stroke-width='6' stroke-dasharray='50%25%2c 15%25' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e");
    }
  }
`;
