import { ReactNode } from "react";

import { ConnectedStateProvider } from "./data";
import { BackgroundStyle, LayoutStyle } from "./styles";

type LayoutProps = {
  header?: ReactNode;
  page: ReactNode;
};

/**
 * Main page layout.
 *
 * @remarks
 * This layout is a reusable wrapper, all main components are passed with props.
 */
export const Layout = ({ header, page }: LayoutProps) => {
  return (
    <ConnectedStateProvider>
      <LayoutStyle>
        {header}
        <BackgroundStyle />
        {page}
      </LayoutStyle>
    </ConnectedStateProvider>
  );
};
