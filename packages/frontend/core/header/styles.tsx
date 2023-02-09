import "@fontsource/orbitron";
import "@fontsource/space-grotesk";

import styled from "styled-components";

export const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleStyle = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-size: 2.5rem;
  color: #e7612e;
  background-color: black;
  //text-shadow: 0px 2px 10px red;

  @media (min-width: 43rem) {
    font-size: 4rem;
  }
`;

export const DesciptionStyle = styled.p`
  color: #e7612e;
  background-color: black;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  text-shadow: red 1px 0 5px;
  line-height: 2.25;
  text-align: center;

  @media (min-width: 43rem) {
    line-height: 2.5;
    font-size: 1.25rem;
  }

  @media (min-width: 62rem) {
    line-height: 2.5;
    font-size: 1.5rem;
  }
`;
export const FancyTextStyle = styled.span`
  font-family: "Space Grotesk", sans-serif;
  width: fit-content;
  text-shadow: none;
  position: relative;
  color: black;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 160%;
    z-index: -1;
    transform: scale(120%) rotate(1deg) translateY(-35%);
    background-color: #e7612e;
  }
`;

export const RoverControlStyle = styled.span<{ color: string }>`
  color: ${props => props.color};
  text-shadow: ${props => props.color} 1px 0 5px;
  background-size:  100% 15%;
  background-repeat: repeat-x;
  background-position: left 0% bottom 10%;
  background-image: linear-gradient(181deg, ${props => props.color} 0%, ${props => props.color} 50%, transparent 54%, transparent 100%);
  
`

export const ButtonStyle = styled.button`
  color: #e7612e;
  background-color: black;
  border: 2px solid #e7612e;
  border-radius: 0.75rem;
  margin: 3rem 0;
  width: 4rem;
  height: 3rem;
  transition: background-color color 50ms ease;
  cursor: pointer;

  :hover {
    background-color: #e7612e;
    color: black;
  }

  @media (min-width: 43rem) {
    width: 5rem;
    height: 4rem;
  }
`;
