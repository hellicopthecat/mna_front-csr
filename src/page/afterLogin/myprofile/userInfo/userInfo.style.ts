import styled from "styled-components";

export const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
export const UserProfileDataHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  h3 {
    font-weight: 700;
    font-size: 25px;
  }
`;
export const UserProfileDataBody = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const UserProfileDataBodyCont = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-weight: 600;
  }
`;
