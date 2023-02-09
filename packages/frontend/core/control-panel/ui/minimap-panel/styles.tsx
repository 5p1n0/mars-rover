import { GridData } from "@mr/common-types";
import styled from "styled-components";

export const HudStyle = styled.span`
  position: relative;
  display: grid;
  grid-auto-flow: dense;
  grid: repeat(${GridData.size}, 12%) / repeat(${GridData.size}, 12%);
  justify-content: center;
  align-content: center;
  background-color: red;
  height: 70vw;
  width: 70vw;
  overflow: hidden;
  border-radius: 50%;
  border: 0.5rem solid #21252e;

  @media (min-width: 43rem) {
    height: 55vw;
    width: 55vw;
    border: 1rem solid #21252e;
  }

  @media (min-width: 62rem) {
    height: 35vw;
    width: 35vw;
    border: 2rem solid #21252e;
  }
`;

export const MinimapStyle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  background-color: #4b597c;
  border-radius: 0.5rem;
  padding: 0.5rem;

  @media (min-width: 43rem) {
    padding: 1rem;
  }

  @media (min-width: 62rem) {
    padding: 2rem;
  }
`;
