import styled from "styled-components";

export const BlockStyle = styled.div`
  position: relative;
  width: 2rem;
  height: 3rem;
  margin: 0 auto 0.5rem;
  background: #21252e;
  cursor: pointer;

  @media (min-width: 43rem) {
    margin: 1.75rem auto;
    width: 3rem;
    height: 6rem;
  }
`;

export const BarStyle = styled.span<{ isOn?: boolean }>`
  position: absolute;
  left: 0.625rem;
  top: 35%;
  display: block;
  width: 0.75rem;
  height: 2.75rem;
  transition: transform 50ms ease;
  background: linear-gradient(#e7612e 80%, #91220f 80% 100%);
  transform: ${(props) =>
    props?.isOn ? `translateY(-70%) rotateX(180deg)` : ``};

  @media (min-width: 43rem) {
    left: 0.9rem;
    width: 1.2rem;
    height: 6rem;
  }
`;
