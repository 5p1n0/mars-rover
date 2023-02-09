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

export const TopLeftDecalStyle = styled(DecalStyle)`
  right: calc(100% + 1.5rem);
  bottom: calc(100% + 1.5rem);
`;

export const TopMiddleLeftDecalStyle = styled(DecalStyle)`
  right: calc(75% + 1.5rem);
  bottom: calc(100% + 1.5rem);
`;

export const TopUpperLeftDecalStyle = styled(DecalStyle)`
  right: calc(100% + 1.5rem);
  bottom: calc(85% + 1.5rem);
`;
