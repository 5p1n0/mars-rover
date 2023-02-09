import styled from "styled-components";

export const ActivityLightStyle = styled.span<{ isOn?: boolean }>`
  display: none;
  width: 2.25rem;
  height: 1rem;
  border: solid 4px #21252e;
  background-color: ${(props) => (props?.isOn ? `#00e6e6` : `#009999`)};
  box-shadow: ${(props) => (props?.isOn ? `0 0 6px 3px inset #69c5ca` : ``)};
  transition: background-color, box-shadow 100ms ease-in-out;

  @media (min-width: 43rem) {
    display: block;
    width: 3rem;
  }
`;
