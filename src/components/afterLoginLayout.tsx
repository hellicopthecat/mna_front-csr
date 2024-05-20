import {ReactNode} from "react";
import styled from "styled-components";
import HeaderComp from "./body/header/header";
import NavComp from "./body/nav/nav";

const AfterLoginLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const AfterLoginCont = styled.main`
  padding: 20px;
`;
const AfterLoginLayout = ({children}: {children: ReactNode}) => {
  return (
    <AfterLoginLayoutWrapper>
      <HeaderComp />
      <NavComp />
      <AfterLoginCont>{children}</AfterLoginCont>
    </AfterLoginLayoutWrapper>
  );
};
export default AfterLoginLayout;
