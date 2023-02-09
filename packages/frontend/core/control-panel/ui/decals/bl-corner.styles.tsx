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

export const BottomLeftDecalStyle = styled(DecalStyle)`
  right: calc(100% + 1.5rem);
  top: calc(100% + 1.5rem);
`;

export const BottomMiddleLeftDecalStyle = styled(DecalStyle)`
  right: calc(75% + 1.5rem);
  top: calc(100% + 1.5rem);
`;

export const BottomUpperLeftDecalStyle = styled(DecalStyle)`
  right: calc(100% + 1.5rem);
  top: calc(85% + 1.5rem);
`;
