import styled from "styled-components";

const DecalStyle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #4b597c;
  position: absolute;
  display: none;

  @media (min-width: 43rem) {
    display: block;
  }
`;

export const BottomRightDecalStyle = styled(DecalStyle)`
  left: calc(100% + 1.5rem);
  top: calc(100% + 1.5rem);
`;

export const BottomMiddleRightDecalStyle = styled(DecalStyle)`
  left: calc(75% + 1.5rem);
  top: calc(100% + 1.5rem);
`;

export const BottomUpperRightDecalStyle = styled(DecalStyle)`
  left: calc(100% + 1.5rem);
  top: calc(85% + 1.5rem);
`;
