import {ReactNode} from "react";
import styled from "styled-components";
//styled
const LayoutWrapper = styled.main`
  width: 100dvw;
  height: 100dvh;
`;
//component
const Layout = ({children}: {children: ReactNode}) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};
export default Layout;
