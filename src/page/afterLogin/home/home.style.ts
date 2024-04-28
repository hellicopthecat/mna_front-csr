import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-size: 25px;
  }
`;
export const CompanyCardCont = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, minmax(280px, 1fr));
  padding: 0 15px;
  overflow-y: scroll;
`;
