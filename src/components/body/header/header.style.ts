import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  background-color: ${(props) => props.theme.bgColor};
  border-bottom: 1px solid ${(props) => props.theme.secondary};
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 30px;
  }
  a {
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: 600;
  }
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
      : props.theme.secondary};
  cursor: pointer;
`;
