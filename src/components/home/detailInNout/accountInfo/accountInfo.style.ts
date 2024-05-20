import styled from "styled-components";

export const AccountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AccountCont = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
export const AccountInfoData = styled.div`
  display: flex;
  gap: 10px;
  input {
    border: none;
    background-color: inherit;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    padding: 5px;
    color: ${(props) => props.theme.txtColor};
    ::placeholder {
      color: gray;
    }
  }
`;
export const AccountInfoEdit = styled.button`
  color: ${(props) => props.theme.txtColor};
  padding: 3px 5px;
  font-size: 12px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
`;
