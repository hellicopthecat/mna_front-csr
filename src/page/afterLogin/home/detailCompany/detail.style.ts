import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h2 {
    font-size: 30px;
  }
`;

export const CompanyInfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;
  div {
    display: flex;
  }
  p {
    display: flex;
    font-size: 13px;
  }
`;
export const CompanyInfoHeaderUp = styled.div`
  flex-direction: column;
  p {
    text-align: left;
    margin-bottom: 10px;
  }
`;
export const CompanyInfoHeaderDown = styled.div`
  gap: 10px;
  p {
    border-radius: 10px;
    padding: 5px 10px;
  }
  p:nth-child(1) {
    background-color: ${(props) => props.theme.badge};
  }
  p:nth-child(2) {
    background-color: ${(props) => props.theme.subBadge};
  }
`;
export const CompanyOwnerCont = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    display: flex;
    gap: 10px;
  }
`;
export const CompanyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
