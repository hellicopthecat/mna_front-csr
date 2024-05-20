import styled from "styled-components";

export const CompanyInfoHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  gap: 20px;
`;
export const CompanyInfoHeaderOne = styled.div`
  display: flex;
  flex-direction: column;
  p {
    text-align: left;
    margin-bottom: 10px;
  }
`;
export const CompanyInfoHeaderTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
`;
export const UserDataCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  place-items: end;
  gap: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      white-space: nowrap;
      border-radius: 10px;
      padding: 5px 6px;
    }
    p:nth-child(3) {
      background-color: ${(props) => props.theme.badge};
    }
    p:nth-child(4) {
      background-color: ${(props) => props.theme.subBadge};
    }
  }
`;

export const CompanyAdressCont = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  font-size: 11px;
  min-width: 450px;
`;
