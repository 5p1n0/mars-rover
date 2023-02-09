import "@fontsource/orbitron";
import "@fontsource/space-grotesk";

import styled from "styled-components";

export const MainSectionStyle = styled.section`
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubSectionStyle = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;

export const ErrorStyle = styled.span`
  color: #e7612e;
  font-family: "Orbitron", sans-serif;
  text-shadow: red 1px 0 10px;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 43rem) {
    font-size: 2.5rem;
  }
`;

export const DescriptionStyle = styled.span`
  color: #e7612e;
  font-family: "Space Grotesk", sans-serif;
  text-shadow: red 1px 0 10px;
  font-size: 1.25rem;
  text-align: center;

  @media (min-width: 43rem) {
    font-size: 1.5rem;
  }
`;

export const SpacerStyle = styled.span`
  display: block;
  margin: 0 1rem;
  width: 2px;
  height: 3.5rem;
  background-color: #e7612e;

  @media (min-width: 43rem) {
    width: 4px;
    margin: 0 2rem;
  }
`;

export const BackButtonStyle = styled.button`
  color: #e7612e;
  border: 2px solid #e7612e;
  text-shadow: red 1px 0 10px;
  border-radius: 0.75rem;
  width: 12rem;
  height: 4.5rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  text-align: center;
  background-color: black;
  transition: background-color color 50ms ease;
  cursor: pointer;

  @media (min-width: 43rem) {
    font-size: 1.25rem;
    height: 5.5rem;
    width: 15rem;
  }

  :hover {
    text-shadow: none;
    background-color: #e7612e;
    color: black;
  }
`;
