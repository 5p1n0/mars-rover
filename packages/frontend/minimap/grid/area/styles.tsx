import { Plus } from "react-feather";
import styled from "styled-components";

export const AreaStyle = styled.span`
  position: relative;
`;

export const PlusIconTopLeftStyle = styled(Plus)`
  position: absolute;
  top: -3px;
  left: -3px;
`;

export const PlusIconBottomLeftStyle = styled(Plus)`
  position: absolute;
  top: calc(100% - 3px);
  left: -3px;
`;

export const PlusIconTopRightStyle = styled(Plus)`
  position: absolute;
  top: -3px;
  left: calc(100% - 3px);
`;

export const PlusIconBottomRightStyle = styled(Plus)`
  position: absolute;
  top: calc(100% - 3px);
  left: calc(100% - 3px);
`;
