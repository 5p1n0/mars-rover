import "@fontsource/vt323";

import styled from "styled-components";

const LabelStyle = styled.span<{ selected: boolean }>`
  display: block;
  font-family: "VT323", monospace;
  font-size: 1.5rem;
  transition: color 100ms ease-in-out;
  color: ${(props) => (props.selected ? "#e4e4f0" : "#21252e")};

  @media (min-width: 43rem) {
    font-size: 2rem;
  }
`;

export const NorthLabelStyle = styled(LabelStyle)`
  position: absolute;
  align-self: start;
  top: 0.5rem;
`;

export const SouthLabelStyle = styled(LabelStyle)`
  position: absolute;
  align-self: end;
  bottom: 0.5rem;
`;

export const EastLabelStyle = styled(LabelStyle)`
  position: relative;
  order: 3;
  margin-right: 1rem;
  margin-left: auto;
`;

export const WestLabelStyle = styled(LabelStyle)`
  position: relative;
  order: 1;
  margin-right: auto;
  margin-left: 1rem;
`;

export const WrapperStyle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  background-color: #4b597c;
  border-radius: 0.5rem;
  height: 15rem;
  width: 15rem;
`;
