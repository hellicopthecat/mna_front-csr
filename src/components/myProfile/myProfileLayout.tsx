import {ReactNode} from "react";
import styled from "styled-components";

const MyprofileLayoutCont = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 1fr);
  padding: 20px;
  gap: 30px;
`;
const MyprofileLayout = ({children}: {children: ReactNode}) => {
  return <MyprofileLayoutCont>{children}</MyprofileLayoutCont>;
};
export default MyprofileLayout;
