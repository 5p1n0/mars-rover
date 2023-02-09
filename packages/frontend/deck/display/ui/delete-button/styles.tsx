import { Delete } from "react-feather";
import styled from "styled-components";

export const DeleteButtonStyle = styled(Delete)`
  align-self: flex-end;
  height: 20px;
  width: 20px;
  margin-left: auto;
  margin-right: 0.75rem;
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
