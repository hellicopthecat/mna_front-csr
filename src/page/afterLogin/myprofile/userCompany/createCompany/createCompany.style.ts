import styled from "styled-components";

export const CreateCompanyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  legend {
    font-size: 25px;
    font-weight: 600;
  }
`;
export const CreateCompanyInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    font-size: 17px;
    font-weight: 600;
  }
  label::before {
    content: "*";
    margin-right: 5px;
    color: red;
  }
  input {
    border: none;
    background-color: inherit;
    color: ${(props) => props.theme.txtColor};
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    padding: 5px 10px;
  }
`;
export const CreateCompanyBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
