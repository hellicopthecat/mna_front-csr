import styled from "styled-components";

export const EditUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  h2 {
    font-size: 30px;
    font-weight: 600;
  }
  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  button:last-child {
    margin-top: 30px;
  }
`;
