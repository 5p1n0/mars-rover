import "@fontsource/vt323";

import styled from "styled-components";

export const LabelStyle = styled.span<{ isSelected?: boolean }>`
  display: block;
  font-family: "VT323", monospace;
  font-size: 1.5rem;
  transition: color 100ms ease-in-out;
  color: ${(props) => (props?.isSelected ? "#e4e4f0" : "#21252e")};

  @media (min-width: 43rem) {
    font-size: 2rem;
  }
`;
