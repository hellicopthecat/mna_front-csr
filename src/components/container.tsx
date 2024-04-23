import {ReactNode} from "react";
import styled from "styled-components";
//styled
const ContainerWrapper = styled.div``;
//component
const Container = ({children}: {children: ReactNode}) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
export default Container;
