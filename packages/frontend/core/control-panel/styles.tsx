import styled from "styled-components";

export const ControlPanelStyle = styled.div`
  display: flex;
  position: relative;
  min-height: 50rem;
  flex-direction: column;
  align-items: center;
  background-color: #6f7e9f;
  padding: 1rem;
  gap: 1.5rem;
  border: 1rem solid #21252e;

  @media (min-width: 43rem) {
    padding: 2rem;
    gap: 3rem;
    border: 4rem solid #21252e;
  }

  @media (min-width: 62rem) {
    justify-content: space-around;
    flex-direction: row;
    padding: 2rem;
    border: 4rem solid #21252e;
  }
`;
