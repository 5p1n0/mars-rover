import { Send } from "react-feather";
import styled from "styled-components";

export const SendButtonStyle = styled(Send)`
  align-self: end;
  height: 20px;
  width: 20px;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: transparent;
  transition: background-color 50ms ease;

  :hover {
    background-color: #21252e;
  }

  @media (min-width: 43rem) {
    border-radius: 0.75rem;
    padding: 0.75rem;
    height: 24px;
    width: 24px;
  }
`;
