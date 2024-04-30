import styled from "styled-components";

export const UserCompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
`;
export const UserCompanyBodyWrapper = styled.div`
  height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;
export const UserCompanyBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
  gap: 20px;
  height: 100dvh;
  padding: 30px;
`;

export const UserCompanyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 30px;
  padding: 50px;
  position: relative;
  background-color: ${(props) => props.theme.cardColor};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  h3 {
    font-size: 30px;
    font-weight: 600;
  }
`;
