import styled from "styled-components";

export const ForwardToggleStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  min-width: 3.5rem;
  min-height: 8rem;
  border: solid 0.5rem #21252e;
  border-radius: 0.25rem;

  @media (min-width: 43rem) {
    border: solid 0.8rem #21252e;
    min-width: 5rem;
    min-height: 18rem;
  }

  @media (min-width: 62rem) {
    border: solid 0.8rem #21252e;
  }
`;
