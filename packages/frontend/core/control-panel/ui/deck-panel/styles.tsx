import styled from "styled-components";

export const DeckStyle = styled.div`
  flex: 1 1 30%;
  display: flex;
  align-items: flex-start;
  row-gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80vw;
  height: 80vw;

  @media (min-width: 43rem) {
    height: 70vw;
    width: 70vw;
  }

  @media (min-width: 62rem) {
    align-items: center;
    height: 40vw;
    width: 40vw;
  }
`;
