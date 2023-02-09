import "@fontsource/vt323";

import styled from "styled-components";

export const PromptStyle = styled.span<{ basis: number }>`
  display: block;
  flex: 0 1;
  flex-basis: ${(props) => `${props.basis}%`};
  align-self: start;
  text-align: left;
  color: white;
  font-family: "VT323", monospace;
  font-size: 1.5rem;

  @media (min-width: 43rem) {
    font-size: 1.75rem;
    flex-basis: 65%;
  }

  @media (min-width: 62rem) {
    font-size: 1.875rem;
    flex-basis: 65%;
  }
`;

export const AlertStyle = styled.span`
  color: white;
  font-family: "VT323", monospace;
  font-size: 1.375rem;

  @media (min-width: 43rem) {
    font-size: 1.75rem;
  }

  @media (min-width: 62rem) {
    font-size: 1.875rem;
  }
`;
