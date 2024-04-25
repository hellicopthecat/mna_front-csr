import {ReactNode} from "react";
import styled from "styled-components";
//styled
const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
`;
//component
const Container = ({children}: {children: ReactNode}) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
export default Container;
