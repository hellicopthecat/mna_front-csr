import styled from "styled-components";

export const WorkersPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const WorkersHeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
`;
export const WorkersCardCont = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 100%;
`;
