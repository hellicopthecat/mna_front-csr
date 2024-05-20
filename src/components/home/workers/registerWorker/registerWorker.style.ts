import styled from "styled-components";

export const RegisterWorkerForm = styled.form`
  position: absolute;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  legend {
    font-size: 20px;
    font-weight: 600;
  }
`;
export const RegisterWorkerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  label {
  }
  input {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    padding: 5px 10px;
  }
`;
export const RegisterWorkerBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
