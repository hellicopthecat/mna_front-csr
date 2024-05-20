import {ReactNode} from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GobackBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const ModalWrapper = ({
  children,
  goBack,
}: {
  children: ReactNode;
  goBack: () => void;
}) => {
  return (
    <ModalDiv>
      <GobackBg onClick={goBack} />
      {children}
    </ModalDiv>
  );
};
export default ModalWrapper;
