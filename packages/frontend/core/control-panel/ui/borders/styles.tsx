import styled from "styled-components";

const Border = styled.div`
  position: absolute;
  background-color: #4b597c;
`;

export const TopBorderStyle = styled(Border)`
  height: 0.5rem;
  width: 40%;
  top: -0.5rem;

  @media (min-width: 43rem) {
    height: 1.5rem;
    top: -1.5rem;
  }
`;

export const BottomBorderStyle = styled(Border)`
  height: 0.5rem;
  width: 40%;
  bottom: -0.5rem;

  @media (min-width: 43rem) {
    height: 1.5rem;
    bottom: -1.5rem;
  }
`;

export const RightBorderStyle = styled(Border)`
  width: 0.5rem;
  height: 40%;
  left: 100%;
  top: 30%;

  @media (min-width: 43rem) {
    width: 1.5rem;
  }
`;

export const LeftBorderStyle = styled(Border)`
  width: 0.5rem;
  height: 40%;
  right: 100%;
  top: 30%;

  @media (min-width: 43rem) {
    width: 1.5rem;
  }
`;
