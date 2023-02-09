import styled from "styled-components";

export const KnobDialStyle = styled.div<{ angle: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 0;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #21252e;
  transition: transform 200ms ease-in-out;
  transform: rotate(${(props) => `${props.angle}deg`});

  @media (min-width: 43rem) {
    width: 100%;
    height: 100%;
  }
`;

export const KnobNeddleStyle = styled.span`
  display: block;
  width: 0.75rem;
  height: 1.75rem;
  border: 0.375rem solid #21252e;
  top: -0.5rem;
  background-color: #e4e4f0;
  position: relative;
  z-index: 1;

  @media (min-width: 43rem) {
    width: 0.875rem;
    height: 2.5rem;
    border: 0.5rem solid #21252e;
    top: -1rem;
  }
`;
