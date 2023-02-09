import styled from "styled-components";

const DecalStyle = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: #21252e;
  position: absolute;

  @media (min-width: 43rem) {
    width: 1rem;
    height: 1rem;
  }
`;

export const TopLeftDecalStyle = styled(DecalStyle)`
  align-self: start;
  right: calc(100% - 2rem);
`;

export const TopRightDecalStyle = styled(DecalStyle)`
  align-self: start;
  left: calc(100% - 2rem);
`;

export const BottomRightDecalStyle = styled(DecalStyle)`
  align-self: end;
  left: calc(100% - 2rem);
`;

export const BottomLeftDecalStyle = styled(DecalStyle)`
  align-self: end;
  right: calc(100% - 2rem);
`;
