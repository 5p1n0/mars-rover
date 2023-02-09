import styled from "styled-components";

export const LineStyle = styled.span`
  display: none;
  width: 2.5rem;
  height: 4px;
  background: #21252e;
  margin-bottom: 6px;

  @media (min-width: 43rem) {
    display: block;
    width: 3rem;
  }
`;
