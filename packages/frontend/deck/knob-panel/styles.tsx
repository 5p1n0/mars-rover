import styled from "styled-components";

export const KnobPanelStyle = styled.div`
  display: flex;
  margin-left: 25%;
  margin-right: 25%;
  align-items: center;
  position: relative;
  justify-content: center;
  background-color: #4b597c;
  border-radius: 0.5rem;
  height: 11rem;
  width: 11rem;

  @media (min-width: 43rem) {
    height: 15rem;
    width: 15rem;
  }

  @media (min-width: 63rem) {
    margin-left: 0;
    margin-right: 0;
  }
`;
