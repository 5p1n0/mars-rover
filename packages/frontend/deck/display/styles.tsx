import styled from "styled-components";

export const DisplayStyle = styled.div<{ warning: boolean; victory: boolean }>`
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 0.5rem;
  flex-wrap: nowrap;
  flex-basis: 100%;
  border: solid 0.5rem #21252e;
  border-radius: 0.25rem;
  clip-path: polygon(
    2% 0,
    98% 0,
    100% 10%,
    100% 90%,
    98% 100%,
    2% 100%,
    0 90%,
    0 10%
  );

  background: repeating-linear-gradient(
      ${(props) =>
          props.warning
            ? "#910f325f"
            : props.victory
            ? "#5d910f5f"
            : "#91220f5f"}
        6px,
      ${(props) =>
          props.warning
            ? "#910f325f"
            : props.victory
            ? "#5d910f5f"
            : "#91220f5f"}
        9px,
      transparent 9px,
      transparent 22px
    ),
    repeating-linear-gradient(
      to right,
      ${(props) =>
          props.warning
            ? "#910f325f"
            : props.victory
            ? "#5d910f5f"
            : "#91220f5f"}
        6px,
      ${(props) =>
          props.warning
            ? "#910f325f"
            : props.victory
            ? "#5d910f5f"
            : "#91220f5f"}
        9px,
      transparent 9px,
      transparent 22px
    ),
    ${(props) =>
      props.warning ? "#ff0000" : props.victory ? "#00d500" : "#e7612e"};
  transition: background-color 500ms ease-in-out;
  height: 4.5rem;

  @media (min-width: 43rem) {
    border: solid 1rem #21252e;
    flex-basis: 80%;
    padding: 1rem;
  }

  @media (min-width: 62rem) {
    height: 6rem;
    border: solid 1.125rem #21252e;
    flex-basis: 80%;
    padding: 1rem;
  }
`;
