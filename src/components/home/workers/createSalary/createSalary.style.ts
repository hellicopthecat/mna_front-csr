import styled from "styled-components";

export const CreateSalaryForm = styled.form`
  position: absolute;
  color: black;
  background-color: white;
  padding: 20px;
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
  display: flex;
  gap: 15px;
  flex-direction: column;
  label {
    font-size: 15px;
    font-weight: 600;
  }
  input {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    padding: 5px 10px;
  }
`;
export const CreateSalarySelectCont = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CreateSalaryBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
