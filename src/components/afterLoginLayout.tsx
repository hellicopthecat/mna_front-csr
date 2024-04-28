import {ReactNode} from "react";
import styled from "styled-components";
import HeaderComp from "./body/header/header";
import NavComp from "./body/nav/nav";
import FooterComp from "./body/footer/footer";
const AfterLoginLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const AfterLoginCont = styled.main`
  padding: 40px;
`;
const AfterLoginLayout = ({children}: {children: ReactNode}) => {
  return (
    <AfterLoginLayoutWrapper>
      <HeaderComp />
      <NavComp />
      <AfterLoginCont>{children}</AfterLoginCont>
      <FooterComp />
    </AfterLoginLayoutWrapper>
  );
};
export default AfterLoginLayout;
