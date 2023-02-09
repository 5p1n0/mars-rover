import styled from "styled-components";

const DecalStyle = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;

  @media (min-width: 43rem) {
    width: 1rem;
    height: 1rem;
  }

  @media (min-width: 62rem) {
    width: 1rem;
    height: 1rem;
  }
`;

export const TopRightDecalStyle = styled(DecalStyle)`
  top: 1rem;
  left: calc(100% - 1.5rem);
`;

export const TopLeftDecalStyle = styled(DecalStyle)`
  top: 1rem;
  right: calc(100% - 1.5rem);
`;

export const BottomRightDecalStyle = styled(DecalStyle)`
  bottom: 1rem;
  left: calc(100% - 1.5rem);
`;

export const BottomLeftDecalStyle = styled(DecalStyle)`
  bottom: 1rem;
  right: calc(100% - 1.5rem);
`;
