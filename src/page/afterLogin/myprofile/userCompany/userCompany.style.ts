import styled from "styled-components";

export const UserCompanyHeader = styled.div`
  display: flex;
  align-items: end;
  h2 {
    margin-right: 10px;
    font-size: 20px;
    font-weight: 600;
  }
`;
export const UserCompanyBodyWrapper = styled.div`
  height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;
export const UserCompanyBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 30px;
`;

export const UserCompanyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 20px;
  padding: 20px;
  position: relative;
  background-color: ${(props) => props.theme.cardColor};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  h3 {
    margin: 20px 0px;
    font-size: 30px;
    font-weight: 600;
  }
  button {
  }
`;
