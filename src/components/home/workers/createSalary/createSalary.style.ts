import styled from "styled-components";

export const CreateSalaryForm = styled.form`
  position: absolute;
  color: black;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 20px;
  legend {
    font-size: 20px;
    font-weight: 600;
  }
`;
export const CreateSalaryInput = styled.div`
  label {
  }
  input {
  }
`;
export const CreateSalaryBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
