import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.secondary};
  height: 100px;
  padding: 0px 25px;
`;
export const HeaderLeft = styled.div`
  display: flex;
`;
export const HeaderRight = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const Icon = styled.svg<{$icon?: number}>`
  width: 25px;
  height: 25px;
  stroke-width: 2px;
  color: ${(props) =>
    props.$icon === 1
      ? "orange"
      : props.$icon === 2
      ? "cornflowerblue"
      : props.theme.txtColor};
`;
