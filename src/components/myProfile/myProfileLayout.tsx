import {ReactNode} from "react";
import styled from "styled-components";

const MyprofileLayoutCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  min-width: 70%;
`;
const MyprofileLayout = ({children}: {children: ReactNode}) => {
  return <MyprofileLayoutCont>{children}</MyprofileLayoutCont>;
};
export default MyprofileLayout;
